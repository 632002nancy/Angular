import { Component, ViewChild } from '@angular/core';
import { UsersDataService } from './Services/users-data.service';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

export interface Student {
  name: string;
  email: string;
  password: string;
  _id?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integrateApiAngular';
  //we can't connect angular directly to database so we use api to get the data

  displayData: boolean = false
  allstudent: Student[] = [];
  editMode:boolean=false;
  editStudentId:string='';
  @ViewChild('userForm') form: NgForm;

  displayedColumns = [ 'name', 'email','updateStudent','deleteStudent'];
  dataSource:Student[]=[];

  constructor(private userData: UsersDataService) { }

  getData() {  //get (read)
    this.displayData = true;
    this.userData.getUsers().pipe(map((res) => {
      const student = [];
      for (const key in res) {   //by doing this our properties are getting stored into the array
        student.push(...res[key]) //spreading the properties in key to an individual rpoperty for student array
      }
      return student;
    }))
      .subscribe((res) => {
        this.allstudent = res;
        console.log(this.allstudent);
        this.dataSource=this.allstudent;
      });
  }

  postData(data: { name: string, email: string, password: string }): void {   //post (create)
    if(!this.editMode){      //when editMode is false (update button not clicked)
      this.userData.postUsers(data).subscribe((result) => {   //returns an observable so need to subscrie
        console.log(result);
      });
    }
    else{      //when update button clicked
      this.userData.putUsers(this.editStudentId,data)
      .subscribe((result)=>{
        console.log(result);
      })
    } 
  }

  updateData(data: string): void {   //put(update)
    //get student details based on id
    let currentStudent = this.allstudent.find((s) => {   //s will have the each element when iterating over allstudent
      return s._id === data;
    });
    this.editStudentId=data;
    //populate the form with student details
    this.form.setValue({
      name:currentStudent.name,
      email:currentStudent.email,
      password:currentStudent.password,
    })
    //change the button value to update product
    this.editMode=true;
  }

  deleteData(data: string): void { //delete (delete)
    console.log(data);
    this.userData.deleteUsers(data).subscribe((result) => {console.log(result)});
  }
}