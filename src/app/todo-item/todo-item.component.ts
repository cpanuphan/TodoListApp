import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: TodoItem;

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
