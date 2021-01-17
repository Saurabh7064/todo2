import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }


  executeHelloWorldBean(){
    console.log("execute hellow world bean");
  }
}
