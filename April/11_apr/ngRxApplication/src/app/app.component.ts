import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as UserActions from 'src/app/user.actions'
import * as fromUser from 'src/app/user.selectors';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

export interface IUser {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngRxApplication';

  students: IUser[] = [];
  displayData: boolean = false
  allstudent: any;
  updateButton:boolean=false;
  updateId:number;
  updateStudentData:IUser;
  @ViewChild('userForm') form: NgForm;

  constructor(private store: Store, private userData: UserService) { }  //store is an observable

  ngOnInit(): void { //action called(dispatch)
    this.store.dispatch(UserActions.loadUsers());
  }

  getData():void {
    this.displayData = true;
    //getting data from store
    //After a selector is invoked the first time its memoized value is stored in memory. If the selector is subsequently invoked with the same arguments it will return the memoized value
    this.store.pipe(select(fromUser.getUsers)).subscribe(data => {   //this returns an observable so we need to subscribe to it
      this.allstudent = data;
    })
  }

  deleteData(id:number): void {
    this.store.dispatch(UserActions.deleteUser({id:id}));
    this.form.setValue({
      name:'',
      email:'',
      password:''
    })
    setTimeout(() => {
      this.store.dispatch(UserActions.loadUsers());
      this.getData();
    }, 1000);
  }

  postData(data:IUser):void {
    if(!this.updateButton){
          this.store.dispatch(UserActions.postUser({data:data}));
          this.form.setValue({
            name:'',
            email:'',
            password:''
          })
        setTimeout(() => {
          this.store.dispatch(UserActions.loadUsers());
          this.getData();
        }, 1000);
     }
     else{
      this.store.dispatch(UserActions.putUser({id:this.updateId,data:data}));
      this.form.setValue({
        name:'',
        email:'',
        password:''
      })
      setTimeout(() => {
        this.store.dispatch(UserActions.loadUsers());
        this.getData();
      }, 1000);
      this.updateButton=false;
    }
  }

  updateData(id:number,data:IUser):void {
    this.updateButton=true;
    this.form.setValue({
      name:data.name,
      email:data.email,
      password:data.password,
    })
    this.updateId=id;
  }
}