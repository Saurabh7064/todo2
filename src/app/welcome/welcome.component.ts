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
    this.service.executeHelloWorldBean();
   // console.log("welcome");
  }

}
