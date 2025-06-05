import { Routes } from '@angular/router';
import {TodoListComponent} from './components/toDo-list/todo-list';
import { TodoDetailComponent } from './components/todo-detail/todo-detail';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: '' }
];
