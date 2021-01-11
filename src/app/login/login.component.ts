import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'surbhi'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  HandleLogin(){

    if(this.username === "surbhi" && this.password === 'dummy'){
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
    // console.log(this.username);
    // console.log(this.password);
  }

}
