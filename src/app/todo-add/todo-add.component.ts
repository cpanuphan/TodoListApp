import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoDataService } from '../todo-data.service';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  newTodo: TodoItem = new TodoItem();

  constructor(private todoDataService: TodoDataService, private snackBar: MatSnackBar) { }

  onAddTodo() {
    if (this.newTodo.name == null || this.newTodo.name == '') {
      this.snackBar.open('Please type what you need to do!', 'Dismiss', {
        duration: 3000
      });
    } else {
      this.todoDataService.createTodo(this.newTodo);
    }
  }

}
