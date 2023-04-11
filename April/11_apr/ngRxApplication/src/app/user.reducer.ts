import { createReducer, on,Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IUser } from './app.component';

export const userFeatureKey = 'usersState';

//An interface or type that defines the shape of the state
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

//reducer function that handles the actions
export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers,state=>({
    ...state     // state transitions are not modifying the original state, but are returning a new state object using the spread operator
  })),
  on(UserActions.loadUsersSuccess,state=>({
    ...state,    //The spread syntax copies the properties from the current state into the object, creating a new reference,  guaranteeing that the old reference was discarded when a state change occurred
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