import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http:HttpClient
  ) { }

  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8092/basicAuth`,
    {headers}).pipe(
      map(
      data => {
        sessionStorage.setItem('authenticatedUser',username);
        return data;
      }
      )
    );
    //console.log("execute hellow world bean");
  } 


  authenticate(username, password){
    console.log('before'+this.isUserLoggedIn());
    if(username === "surbhi" && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser',username);
      console.log('after'+this.isUserLoggedIn());
            return true;
    }
      return false;
    
  }

  isUserLoggedIn(){
   let user= sessionStorage.getItem('authenticatedUser');
   return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean{
  constructor(public message:String){}
}