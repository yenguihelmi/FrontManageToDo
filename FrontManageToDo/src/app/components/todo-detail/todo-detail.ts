
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToDo} from '../../models/toDo.model';
import {TodoService} from '../../services/toDo.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  standalone: true,
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.html',
  styleUrls: ['./todo-detail.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule
]
})
export class TodoDetailComponent implements OnInit {
  todo: ToDo | null = null;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadTodo(Number(id));
    }
  }

  loadTodo(id: number): void {
    this.todoService.getTodoById(id).subscribe(todo => {
      this.todo = todo;
    });
  }

  updateStatus(completed: boolean): void {
    if (this.todo) {
      this.todoService.updateTodoStatus(this.todo.id, completed)
        .subscribe(updatedTodo => {
          this.todo = updatedTodo;
        });
    }
  }
}
