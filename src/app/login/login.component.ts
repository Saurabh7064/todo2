import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'surbhi'
  password = ''
  constructor() { }

  ngOnInit(): void {
  }

  HandleLogin(){
    console.log(this.username);
  }

}
