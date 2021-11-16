import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  Form = new FormGroup(
    {
      username : new FormControl('srushti'),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl(''),
      // Add new nes
      Class : new FormGroup(
        {
          batch : new FormControl('ukulele'),
          fees : new FormControl('5000')
        }
      )
    }

  );

  // Method to set FormControl fields through program
  SetData()
  {
    this.Form.setValue(
      {
        username : 'srushti',
        passowrd : 'abcd',
        ConfirmPass :  'abcd',
        MarvellousClass : 
        {
          batch : 'ukulele',
          fees : '5000'
        }
      }
    )
  }
}
