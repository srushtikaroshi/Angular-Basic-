import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public str="";

  // It is condiderd as our event handler
  public Event()
  {
    console.log('Button pressed');
  }

  public NewEvent()
  {
    this.str="Button clicked";  
  }

  public EventInfo(value:any)
  {
    console.log(value);
  }
}
