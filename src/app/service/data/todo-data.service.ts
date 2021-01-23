import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8092/users/${username}/todos`);
    //console.log("execute hellow world bean");
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8092/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8092/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`http://localhost:8092/users/${username}/todos/${id}`,todo);
  }

}
