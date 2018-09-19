import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoItem } from './todo-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  todos: TodoItem[] = [];
  private todoSub: Subscription;

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public ngOnInit() {
    this.todoDataService.getAllTodos();
    this.todoSub = this.todoDataService.getTodosUpdateListener()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  ngOnDestroy() {
    this.todoSub.unsubscribe();
  }

}
