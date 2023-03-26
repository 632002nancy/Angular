import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeTask';
  @ViewChild('myform') form!: NgForm;  //! form is a property which is saving this ngForm, operator you basically say: I know what I'm doing and I know that angular will set this value for me

  src:string='';
  dest:string='';
  total_route:Array<string> = [];
  selectedSource:number=0;
  selectedDest:number=0;


  isDisable:boolean=true;

  cities:Array<string>=["Delhi", "Mumbai", "Banglore", "Kolkata"];

  destDisable(item:string){
    console.log(this.form); 
    this.selectedSource= this.cities.indexOf(item);
    console.log(this.selectedSource);
    for (let i = 0; i < this.cities.length; i++) {
      if(i===this.selectedSource){
        console.log(this.form)
      }
      
    }
   
    

   
      // console.log(item.selectedIndex);
    // this.form.value.destination.isDisable='true';
  }

  srcDisable(item:string){
    console.log(item);
    this.selectedDest= this.cities.indexOf(item);
    console.log(this.selectedDest);
  }

  printRoute(){
    this.isDisable=false;
    console.log(this.form);  //console object of type ngform
    // console.log(this.cities[0]);
    this.src=(this.form.value.source);
    // console.log(this.src);
    this.dest=(this.form.value.destination);
    // console.log(this.dest);

    this.form.reset();  //set form control and form state to empty
  }
}