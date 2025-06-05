
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {TodoListComponent} from './components/toDo-list/todo-list';
import {TodoDetailComponent} from './components/todo-detail/todo-detail';
import {TodoService} from './services/toDo.service';
import {App} from './app';
import { routes } from './app.routes';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    App,
    TodoListComponent,
    TodoDetailComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [TodoService],
  bootstrap: [App]
})
export class AppModule { }
