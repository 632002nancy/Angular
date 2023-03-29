import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForms';

  countries:Array<string>=["India","USA","Japan","UK","China"]
  hobby:string[]=["Music","Movie","Travel","Cooking"];

  reactiveForm: FormGroup; //declaring variable for our reactiveForm

  ngOnInit(){
    this.reactiveForm = new FormGroup({  //initializing reactiveForm property , creating our form
    fullname: new FormControl(null,Validators.required),  //making controls of html elements, created form controls
    email: new FormControl("email",[Validators.email,Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
    country: new FormControl("USA",Validators.required),//Use the constructor of FormControl to set its initial value
    gender: new FormControl("Female",Validators.required),
    hobbies: new FormControl(["Travel"],Validators.required),  //multiple selection take array as argument,default value should be an array
    });
  }

  onSubmit(){
    console.log(this.reactiveForm.value.country);
    console.log(this.reactiveForm)
  }
}
