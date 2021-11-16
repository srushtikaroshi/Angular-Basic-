import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public IsSet=true;
  public MyColor="Orange";
  
  constructor() { }

  ngOnInit(): void {
  }

}
