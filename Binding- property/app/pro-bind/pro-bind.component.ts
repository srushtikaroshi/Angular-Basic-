import { Component, OnInit } from '@angular/core';

@Component
({
  selector: 'app-pro-bind',
  templateUrl: './pro-bind.component.html',
  styleUrls: ['./pro-bind.component.css']
})

export class ProBindComponent implements OnInit 
{
  public ID="srushti"; // Used to bind the property
  public IsSet = false;

  constructor() { }

  ngOnInit() {
  }
}
