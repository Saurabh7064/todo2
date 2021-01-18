import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
export class Todo {

    constructor(
      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date
    ){

    }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message : String
  todos : Todo[]
//  todos = [
//       new Todo(1,'learn to dance',false,new Date()),
//       new Todo(2,'have food',false,new Date()),
//       new Todo(3,'learn to play guitar',false,new Date()),
//       new Todo(4,'buy grocery',false,new Date())

//  ]

  constructor(
    private todoService:TodoDataService,
   private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
     
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('angular').subscribe(
      response => {
        this.todos = response;
      }
)

  }

  deleteTodo(id){
    console.log(`Delete todo ${id}`)
    this.todoService.deleteTodo('angular',id).subscribe(
      response=>{
        console.log(response)
        this.message = `${id} TodoId Deleted Successfully!!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`Updated ${id}`)
    this.router.navigate(['todos',id])
  }


}
