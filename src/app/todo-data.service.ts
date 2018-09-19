import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoItem } from './todo-item';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {  

  private todos: TodoItem[] = [];
  private todosUpdated = new Subject<TodoItem[]>();

  constructor(private http: HttpClient) { }

  // API: GET /todos
  getAllTodos() {    
    this.http.get<TodoItem[]>(API_URL + '/api/todo')
      .subscribe((todoItem) => {
        this.todos = todoItem;
        this.todosUpdated.next([...this.todos]);
      });          
  }

  getTodosUpdateListener() {
    return this.todosUpdated.asObservable();
  }

  // API: POST /todos
  createTodo(todo: TodoItem) {
    this.http.post(API_URL + '/api/todo', todo)
      .subscribe((todo: TodoItem) => {
        this.todos.push(todo);
        this.todosUpdated.next([...this.todos]);
      });
  }

  toggleTodoComplete(todo: TodoItem) {
    this.http.put(API_URL + '/api/todo/' + todo.id, todo)
      .subscribe(() => {
        this.todosUpdated.next([...this.todos]);
      })
  }

  deleteTodoById(todoId: number) {
    this.http.delete(API_URL + '/api/todo/' + todoId)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id != todoId);
        this.todosUpdated.next([...this.todos]);
        console.log("deleted!");
      });
  }

}
