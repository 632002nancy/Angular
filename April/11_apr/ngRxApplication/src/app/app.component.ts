import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import * as UserActions from 'src/app/user.actions'
import * as fromUser from 'src/app/user.selectors';
import {map} from 'rxjs/operators'

export interface IUser{
  name:string;
  email:string
  password:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngRxApplication';

  students:IUser[]=[];
  allstudent:IUser[] = [];

  constructor(private store:Store){}  //store is an observable

  ngOnInit(): void {
    //action called(dispatch)
    this.store.dispatch(UserActions.loadUsers());
  }

  getData(){
    //getting data from store
    //After a selector is invoked the first time its memoized value is stored in memory. If the selector is subsequently invoked with the same arguments it will return the memoized value
    this.store.pipe(select(fromUser.getUsers))
    .pipe(map((res) => {
      const student:IUser[] = [];
      for (const key in res) {   //by doing this our properties are getting stored into the array
        student.push({...res[key]}) //spreading the properties in key to an individual rpoperty for student array
      }
      return student;
    }))
    .subscribe(students=>{   //calling selector , store is observable to do operations on observable we use pipe
      this.allstudent = students;
      console.log(this.allstudent);
      this.students=students;
    }); 
  }

  getError(){
    this.store.select(fromUser.getError).subscribe(err=>{
      console.log(err)
    })
  }
}