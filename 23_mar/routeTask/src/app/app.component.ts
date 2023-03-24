import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeTask';
  @ViewChild('myform') form!: NgForm;  //! operator you basically say: I know what I'm doing and I know that angular will set this value for me

  src:string='';
  dest:string='';

  cities:Array<string>=["Delhi", "Mumbai", "Banglore", "Kolkata"];

  

  printRoute(){
    console.log(this.form);  //console object of type ngform
    // console.log(this.cities[0]);
   
    this.src=(this.form.value.source);
    console.log(this.src);
    this.dest=(this.form.value.destination);
    console.log(this.dest);
  }
}