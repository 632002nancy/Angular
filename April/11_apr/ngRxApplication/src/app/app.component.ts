import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select} from '@ngrx/store';
import * as UserActions from 'src/app/user.actions'
import * as fromUser from 'src/app/user.selectors';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

export interface IUser{
  name:string;
  email:string;
  password:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngRxApplication';

  students:IUser[]=[];
  displayData: boolean = false
  allstudent:any;
  message:string='';
  postedData:IUser={name:"",email:'',password:''};

  editMode:boolean=false;
  editStudentId:string='';

  @ViewChild('userForm') form: NgForm;

  displayedColumns = [ 'name', 'email','updateStudent','deleteStudent'];
  dataSource:IUser[]=[];

  constructor(private store:Store,private userData:UserService){}  //store is an observable

  ngOnInit(): void {
    //action called(dispatch)
    this.store.dispatch(UserActions.loadUsers());
  }

  getData(){
    this.displayData=true
    //getting data from store
    //After a selector is invoked the first time its memoized value is stored in memory. If the selector is subsequently invoked with the same arguments it will return the memoized value
      this.store.pipe(select(fromUser.getUsers)).subscribe(data=>{
        console.log(data)    //this returns an observable so we need to subscribe to it
      this.allstudent=data;  
      // this.dataSource=this.allstudent;
    })
  }

  deleteData():void{
    this.store.dispatch(UserActions.deleteUser());
    this.store.select(fromUser.getMessage).subscribe(mssg=>{
      setTimeout(() => {
        this.message=mssg;
        this.store.dispatch(UserActions.loadUsers());
        this.getData();
      }, 1000);
    })
  }

  postData(data: { name: string, email: string, password: string }){
    this.postedData=data
    this.store.dispatch(UserActions.postUser());
    setTimeout(() => {
      this.store.dispatch(UserActions.loadUsers());
      this.getData();
    }, 1000);
  }

  updateData(){
    this.store.dispatch(UserActions.putUser());
    setTimeout(() => {
      this.store.dispatch(UserActions.loadUsers());
      this.getData();
    }, 1000);
    this.form.setValue({
      name:"prancy",
      email:"prancy@gmail",
      password:"123"
    })
  }
}