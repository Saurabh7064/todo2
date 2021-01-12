import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
 todos = [
      {id:1,description:'learn to dance'},
      {id:2,description:'have food'},
      {id:3,description:'learn to play guitar'},
      {id:4,description:'buy grocery'}

 ]

  constructor() { }

  ngOnInit(): void {
  }

}
