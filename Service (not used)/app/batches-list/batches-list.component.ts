import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches-list',
  templateUrl: './batches-list.component.html',
  styleUrls: ['./batches-list.component.css']
})
export class BatchesListComponent implements OnInit 
{
  public batches = 
  [
    {"Name":"Food Technology", "Fees":90000, "Duration":"4 years"},
    {"Name":"Chemical Engineering", "Fees":90000, "Duration":"4 years"},
  ];

  ngOnInit() 
  {
  }

}
