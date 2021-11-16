import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';     // add explicitly for bootstrap
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()                               // add explicitly for bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Need to download bootstrap in your project
also in angular.json
"styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",   
              "src/styles.css"
            ],
*/
            