import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiComponent } from './hi/hi.component';
import { ByeComponent } from './bye/bye.component';

@NgModule({
  declarations: [ HiComponent, ByeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HiComponent
  ]
})
export class SecondModule { }
