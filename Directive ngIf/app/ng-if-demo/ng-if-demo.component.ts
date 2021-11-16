import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent implements OnInit 
{
  public flag = false;  // if you give true value then you will get different output

  ngOnInit() {
  }

}
