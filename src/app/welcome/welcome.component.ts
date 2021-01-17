import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
import { WelcomeDataService } from './../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 message = 'Hello';
 welcomeMessageFromService : String
 name= ''
 //add ActivatedRoute as Dependecy Injection
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
   // console.log(this.message);
    //pickup the name parameter
    //here params is a map. and name is the key
    this.name= this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBean());
    this.service.executeHelloWorldBean().subscribe(
      response => this.handleSuccessfullResponse(response)
    );
   // console.log("welcome");
  }

  handleSuccessfullResponse(response){
      this.welcomeMessageFromService=response.message;

    
  }

}
