import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateForms';

 @ViewChild('myForm') form!: NgForm

  foods: Food[] = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'},
  ];

  // onSubmit(form: NgForm){    //when passing the local refernce on ngSubmit
  //   console.log("submitted");
  //   console.log(form);
  //   console.log(form.value.fullName);
  //   console.log(form.value.favFood);
  //   this.favFood=form.value.favFood;
  // }
  onSubmit(){
    console.log("submitted");
    console.log(this.form);
    console.log(this.form.value.fullName);
    console.log(this.form.value.favFood);
  }

  Onfood(){
    console.log("inside food Change")
    console.log(this.form.value.favFood);
  }
}
