import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: TodoItem[];

  constructor(private todoDataService: TodoDataService) {
  }

  toggleTodoComplete(todo: TodoItem) {
    todo.isComplete = !todo.isComplete;
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: TodoItem) {
    this.todoDataService.deleteTodoById(todo.id);
  }

}
