import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srcDest';

  src:string='';
  dest:string='';

  cities:Array<string>=["Delhi", "Mumbai", "Banglore", "Kolkata"];

  printRoute(){
   
  }

}
