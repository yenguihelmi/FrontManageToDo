
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../models/toDo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8080/toDos';

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<ToDo> {
    return this.http.get<ToDo>(`${this.apiUrl}/${id}`);
  }

  getCompletedTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiUrl}/completed`);
  }

  getPendingTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiUrl}/notCompleted`);
  }

  createTodos(todos: ToDo[]): Observable<ToDo[]> {
    return this.http.post<ToDo[]>(this.apiUrl, todos);
  }

  updateTodoStatus(id: number, completed: boolean): Observable<ToDo> {
    return this.http.put<ToDo>(`${this.apiUrl}/${id}`, null, {
      params: { completed: completed.toString() }
    });
  }
}
