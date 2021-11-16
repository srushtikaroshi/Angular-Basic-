import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService 
{
 constructor() { }

 // Write method in service class which returns array 
 // of batch details
GetBatchDetails()
{
  return [
    {"Name":"Food Technology", "Fees":90000, "Duration":"4 years"},
    {"Name":"Chemical Engineering", "Fees":90000, "Duration":"4 years"},
        ];
}

}
