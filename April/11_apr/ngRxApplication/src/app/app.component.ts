import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import * as UserActions from 'src/app/user.actions'
import * as fromUser from 'src/app/user.selectors'

export interface IUser{
  name:string;
  age:number;
  gender:string
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
    this.store.dispatch(UserActions.loadUsers());  //action called(dispatch)

    this.store.pipe(select(fromUser.getUsers)).subscribe(users=>{   //calling selector , store is observable to do operations on observable we use pipe
      console.log(users)
      this.users=users
    });   //getting data from store
  }

}
