import { Component, OnInit} from '@angular/core';
import {ToDo} from '../../models/toDo.model';
import {TodoService} from '../../services/toDo.service';
import { RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule
],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];
  filter: 'all' | 'completed' | 'pending' = 'all';


  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  loadTodos(): void {
    switch (this.filter) {
      case 'completed':
        this.todoService.getCompletedTodos().subscribe(todos => this.todos = todos);
        break;
      case 'pending':
        this.todoService.getPendingTodos().subscribe(todos => this.todos = todos);
        break;
      default:
        this.todoService.getAllTodos().subscribe(todos => this.todos = todos);
    }
  }

  updateStatus(id: number, completed: boolean): void {
    this.todoService.updateTodoStatus(id, completed)
      .subscribe(() => this.loadTodos());
  }

  applyFilter(filter: 'all' | 'completed' | 'pending'): void {
    this.filter = filter;
    this.loadTodos();
  }
}
