import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any           //unknown 
  {
    
    let str = value;

    if(args[0] == "Maharashtra")
    {
      str +=  " Angular as client side framework " 
    }
    return str;
  }

}


  
