import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ichild',
  templateUrl: './ichild.component.html',
  styleUrls: ['./ichild.component.css']
})
export class IchildComponent implements OnInit {

  public myUrl = window.location.href ;
  public name = "Hey Guys!";

  constructor() { }

  ngOnInit(): void {
  }
  userName(){
    return  "Welcome to : "+this.name ;
  }

}
