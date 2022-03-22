import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  public CourseId ="123" ;
  public isDisabled = true ;
  public Status = true ;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    alert("hi MY NAME IS BALU")
  }
}
