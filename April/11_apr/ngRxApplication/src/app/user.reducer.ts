import { createReducer, on,Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IUser } from './app.component';

export const userFeatureKey = 'usersState';

export interface State {   //creating state which holds data user oftype IUser and error of type string
  users:IUser[],
  error:string
}

export const initialState: State = {
   //defining the initial value for state data in store
  users:
  [
    {name:"nancy",age:21,gender:"female"}
  ],
  error:''
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers,state=>({
    ...state
  })),
  on(UserActions.loadUsersSuccess,state=>({
    ...state,
    users:
    [  
      {name:"Yash",age:22,gender:"male"},
      {name:"Shorya",age:21,gender:"male"},
      {name:"Himanshu",age:20,gender:"male"},
    ], 
    error:''
  })),
  on(UserActions.loadUsersFailure,state=>({
    ...state,
    users:[],
    error:'Error in LoadUser'
  }))
);

