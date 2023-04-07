import { Component } from '@angular/core';
import { UsersDataService } from './Services/users-data.service';

export interface PeriodicElement {
  name: string;
  email: number;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integrateApiAngular';
  //we can't connect angular directly to database so we use api to get the data

  getJsonValue: any;
  postJsonValue: any;

  constructor(private userData: UsersDataService) {
    userData.getUsers().subscribe((data)=>{  ///subscribe tells that the data from the api will be used in this Appcomponent not in other components
      this.getJsonValue=data;
    });  
   }

   ELEMENT_DATA: PeriodicElement[] = [
  
    {  name: 'Hydrogen', email: 1.0079, password: 'H' }];

  addstudentclicked: boolean = false;
  updatestudentclicked: boolean = false;
  deletestudentclicked: boolean = false;
  displaystudentclicked: boolean = false;

  addStudent() {
    this.addstudentclicked = true;
    this.updatestudentclicked = false;
    this.deletestudentclicked = false;
    this.displaystudentclicked = false;
  }

  updateStudent() {
    this.updatestudentclicked = true;
    this.addstudentclicked = false;
    this.deletestudentclicked = false;
    this.displaystudentclicked = false;
  }

  deleteStudent() {
    this.deletestudentclicked = true;
    this.addstudentclicked = false;
    this.updatestudentclicked = false;
    this.displaystudentclicked = false;
  }

  //get student data
  displayStudent() {
    this.displaystudentclicked = true;
    this.addstudentclicked = false;
    this.updatestudentclicked = false;
    this.deletestudentclicked = false;
  }
  postData(data:any){
    this.userData.postUsers(data).subscribe((result)=>{
      console.log(result);
    })
  }
  deleteData(data:any){
    console.log(data);
    // this.userData.deleteUsers(data).subscribe((result)=>{
    //   console.log(result)
    // })
  }
  displayedColumns: string[] = ['position', 'name', 'email', 'password'];
  dataSource = this.ELEMENT_DATA;
}
