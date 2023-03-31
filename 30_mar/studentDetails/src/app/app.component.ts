import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studentDetails';

  streams: string[] = ["CSE", "ME", "ECE", "EE", "CE"];
  showConfirmation: boolean = false;
  index:number=0;

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({  //here form controls are created in key value pairs
      fullName: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(20)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      stream: new FormControl(null, [Validators.required]),
      subjects: new FormArray([   //here form controls are created in the form of an array
        new FormControl(null, Validators.required),
      ])
    });
  }

  addSubject(): void {
    (<FormArray>this.reactiveForm.get('subjects')).push(new FormControl(null, Validators.required)); //this this.reactiveForm.get('subjects') gives value of type formControl formArray and more so we need to explicity typecast this as a type of formArray
  }  //here we are pushing new formArray inside the formArray(subjects), so we need to loop over that array in html

  deleteSubjectMssg(i: number) {
    this.index=i;
    this.showConfirmation = true;
  }
  hideMssg() {
    this.showConfirmation = false;
  }
  deleteSubject(delSubIndex: number): void {
    (<FormArray>this.reactiveForm.get('subjects')).removeAt(delSubIndex);
  }

  onSubmit(): void {
    this.reactiveForm.reset();
  }
}