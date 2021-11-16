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
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {


  }

  Form = this.fbobj.group(
    {
      username :['srushti'],
      passowrd : ['abcd'],
      ConfirmPass : ['abcd'],
      Class : this.fbobj.group(
        {
          batch :['kathak'],
          fees : ['5000'] 
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
        Class : 
        {
          batch : 'kathak',
          fees : '5000'
        }
      }
    )
  }
}
