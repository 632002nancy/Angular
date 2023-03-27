import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matSelect';

  src:string='';
  dest:string='';
  selectedSrc:number=0;
  selectedDest:number=0;
  
  cities:Array<string>=["","Delhi", "Mumbai", "Banglore", "Kolkata", "Sikkim"];
 
  disableDest(data:string) { 
    console.log("select event emitted when source changed")
    console.log(data)
    this.src=data;
    this.selectedSrc=this.cities.indexOf(data)
    console.log(this.selectedSrc)
  }

  disableSrc(data:string) { 
    console.log("select event emitted when destination changed")
    console.log(data)
    this.dest=data;
    this.selectedDest=this.cities.indexOf(data)
    console.log(this.selectedDest)
  }


}
