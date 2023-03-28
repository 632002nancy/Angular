import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForms';

  countries:Array<string>=["India","USA","Japan","UK","China"]

  reactiveForm: FormGroup; //declaring variable for our reactiveForm

  ngOnInit(){
    this.reactiveForm = new FormGroup({  //initializing reactiveForm property , creating our form
    fullname: new FormControl("nancy"),  //making controls of html elements, created form controls
    country: new FormControl("India"),//Use the constructor of FormControl to set its initial value
    gender: new FormControl("Male"),
    hobbies: new FormControl("Music"),
    });
  }

  onSubmit(){
    console.log(this.reactiveForm.value.fullname)
  }
}
