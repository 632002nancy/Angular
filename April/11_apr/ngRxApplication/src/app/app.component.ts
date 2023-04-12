import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import * as UserActions from 'src/app/user.actions'
import * as fromUser from 'src/app/user.selectors'

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

  users:IUser[]=[];

  constructor(private store:Store){}  //store is an observable

  ngOnInit(): void {
      //action called(dispatch)
  }

  getData(){
    this.store.dispatch(UserActions.loadUsers());
    //getting data from store
    //After a selector is invoked the first time its memoized value is stored in memory. If the selector is subsequently invoked with the same arguments it will return the memoized value
    this.store.pipe(select(fromUser.getUsers)).subscribe(users=>{   //calling selector , store is observable to do operations on observable we use pipe
      console.log(users)
      this.users=users
    }); 
  }

  getError(){
    this.store.select(fromUser.getError).subscribe(err=>{
      console.log(err);
    })
  }

}
