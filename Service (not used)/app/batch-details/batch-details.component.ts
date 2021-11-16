import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Same array is used in both components
  public batches = 
  [
    {"Name":"Food Technology", "Fees":90000, "Duration":"4 years"},
    {"Name":"Chemical Engineering", "Fees":90000, "Duration":"4 years"},
  ];

  ngOnInit() {
  }

}
