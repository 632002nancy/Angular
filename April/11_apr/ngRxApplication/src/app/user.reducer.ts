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
  users:[],
  error:''
};

//reducer function that handles the actions
export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers,state=>({
    ...state     // state transitions are not modifying the original state, but are returning a new state object using the spread operator
  })),
  on(UserActions.loadUsersSuccess,(state, {data})=>(
    {
    ...state,    //The spread syntax copies the properties from the current state into the object, creating a new reference,  guaranteeing that the old reference was discarded when a state change occurred
    users:data, 
    error:'No Error Occured'
  }
  )),
  on(UserActions.loadUsersFailure,(state,err)=>({
    ...state,
    users:[],
    error:'Error in LoadUser'
  }))
);