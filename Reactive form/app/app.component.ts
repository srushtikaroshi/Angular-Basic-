import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormGroup,FormControl} from '@angular/forms'

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
      ConfirmPass : new FormControl('')

    }
  );
}
