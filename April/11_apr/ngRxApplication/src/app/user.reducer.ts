import { createReducer, on,Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IUser } from './app.component';

export const userFeatureKey = 'usersState';    //store name

//An interface or type that defines the shape of the state
export interface State {   //creating state which holds data user oftype IUser and error of type string
  users:IUser[],
  error:string,
  message:string,
  postedUser:IUser,
}

export const initialState: State = {
   //defining the initial value for state data in store
  users:[],
  error:'',
  message:'',
  postedUser:{name:'',email:'',password:''}
};

//reducer function that handles the actions
export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers,(state)=>({
    ...state,     // state transitions are not modifying the original state, but are returning a new state object using the spread operator
  })),
  on(UserActions.loadUsersSuccess,(state, {data})=>(
    {
    ...state,    //The spread syntax copies the properties from the current state into the object, creating a new reference,  guaranteeing that the old reference was discarded when a state change occurred
    users:data, 
    error:'No Error Occured!!!'
  }
  )),
  on(UserActions.loadUsersFailure,(state, {error})=>({
    ...state,  // It simply prevents us from omitting values that haven’t been changed with this action
    error:'Error in LoadUser'
  })),

  on(UserActions.deleteUser,(state)=>({
    ...state,     
  })),
  on(UserActions.deleteUsersSuccess,(state, {data})=>(
    {
    ...state,    
    message:data, 
    error:'No Error Occured!!!'
  }
  )),
  on(UserActions.deleteUsersFailure,(state, {error})=>({
    ...state,  
    error:'Error in Deleting User'
  })),

  on(UserActions.postUser,(state)=>({
    ...state,     
  })),
  on(UserActions.postUsersSuccess,(state, {data})=>(
    {
    ...state,   
    postedUser:data, 
    error:'No Error Occured!!!'
  }
  )),
  on(UserActions.postUsersFailure,(state, {error})=>({
    ...state, 
    error:"Error in Posting User"
  })),

  on(UserActions.putUser,(state)=>({
    ...state,     
  })),
  on(UserActions.putUsersSuccess,(state, {data})=>(
    {
    ...state,  
    postedUser:data, 
    error:'No Error Occured!!!'
  }
  )),
  on(UserActions.putUsersFailure,(state, {error})=>({
    ...state,  
    error:"Error in Updating user"
  })),
);
