import { Component,ViewChild } from '@angular/core';
import { NgModel } from "@angular/forms";
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'matSelect';

  constructor(){
    console.log("constructor invoked")
  }

  source:string='';
  destination:string='';
  selectedSrc:number=0;
  selectedDest:number=0;
  
  cities:Array<string>=["","Delhi", "Mumbai", "Banglore", "Kolkata", "Sikkim"];

  disableDest() { 
    console.log("select event emitted when source changed");
    console.log(this.source);
    this.selectedSrc=this.cities.indexOf(this.source);
    console.log(this.selectedSrc);
  }

  disableSrc() { 
    console.log("select event emitted when destination changed");
    console.log(this.destination)
    this.selectedDest=this.cities.indexOf(this.destination);
    console.log(this.selectedDest);
  }


}
