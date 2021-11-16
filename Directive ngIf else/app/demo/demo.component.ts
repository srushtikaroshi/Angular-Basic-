import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

   // Characteristics to hold batch name
   bname:string = "";
   str:string = "" ;
 
   // flag to maintain status of batch name
   flag:boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  // handler for the button event
  gun()
  {
    this.str = 'You have selected branch '+this.bname;  
  }

  // HAndler for text box
  fun(event:any)
  {
    // Flag indicates data is entered by the user
    this.flag = true;
    this.bname = (<HTMLInputElement>event.target).value;
  }
}