import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studentDetails';
  
  streams: string[] = ["CSE", "ME", "ECE", "EE", "CE"];

  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm=new FormGroup({  //here form controls are created in key value pairs
      fullName:new FormControl(null,Validators.required),
      age:new FormControl(null,[Validators.required,Validators.min(15),Validators.max(20)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      stream:new FormControl(null,[Validators.required]),
      subInput:new FormControl(null),
      subjects:new FormArray([   //here form controls are created in the form of an array
        new FormControl(null,Validators.required),
      ])
    });
    // this.reactiveForm.get('subInput').disable()
  }

    addSubject():void{
      (<FormArray>this.reactiveForm.get('subjects')).push(new FormControl(null,Validators.required)) //this this.reactiveForm.get('subjects') gives value of type formControl formArray and more so we need to explicity typecast this as a type of formArray
    }  //here we are pushing new formArray inside the formArray(subjects), so we need to loop over that array in html

    deleteSubject():void{
      let value:any;
      let index:number;
      value=this.reactiveForm.controls['subjects'].value;
      for (let i = 0; i < value.length; i++) {
        console.log("inside for")
        if(value[i]===this.reactiveForm.value.subInput){
          index=i;
        }  
      }
      (<FormArray>this.reactiveForm.get('subjects')).removeAt(index);
    } 

    onSubmit():void{
      console.log("Details Of the student are:")
      console.log(this.reactiveForm.value.fullName);
      console.log(this.reactiveForm.value.age);
      console.log(this.reactiveForm.value.email);
      console.log(this.reactiveForm.value.stream);
      console.log(this.reactiveForm.value.subjects);
      console.log(this.reactiveForm.get('subjects')['controls']);
      console.log(this.reactiveForm)

      // this.reactiveForm.reset();
    }
  }
  
