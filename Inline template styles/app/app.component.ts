import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Inline template styles</h1>
  <h1>Inside app component</h1>

  <app-demo1></app-demo1>

  <h3>Web Development</h3>
  <h3>Inline css</h3>
  `,
  styles: [`
  h3{
    color: blue
  }
  h1{
    color: red
  }
  `]
 
})
export class AppComponent {
  title = 'app';
}


//if you change sequence of template statements then output will be different. 