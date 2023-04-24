import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ITodo, Todo } from '../model/todo';

@Injectable()
export class Service {
  constructor(private http: HttpClient) {}

  read() {
    return this.http
      .get<ITodo>('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((res) => new Todo(res)));
  }
}
