import { createAction, props } from '@ngrx/store';
import { IUser } from './app.component';
//The createAction function returns a function, that when called returns an object in the shape of the Action interface
///////////////////////////////GET
export const loadUsers = createAction(
  '[User] Load Users'  //category of the action is captured within the square brackets [].
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',   // [what is changing] — what’s exactly happening
  props<{ data: IUser[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);
///////////////////////////////////PUT
export const putUser = createAction(
  '[User] Put Users',
  props<{data:IUser,id:number}>()
);

export const putUsersSuccess = createAction(
  '[User] Put Users Success',
  props<{data:IUser}>()
);

export const putUsersFailure = createAction(
  '[User] Put Users Failure',
  props<{ error: string }>()
);
////////////////////////////////////////POST
export const postUser = createAction(
  '[User] Post Users',
  props<{data:IUser}>()
);

export const postUsersSuccess = createAction(
  '[User] Post Users Success',
  props<{data:IUser}>()
);

export const postUsersFailure = createAction(
  '[User] Post Users Failure',
  props<{ error: string }>()
);
///////////////////////////////DELETE
export const deleteUser = createAction(
  '[User] Delete Users',
  props<{id:number}>()
);

export const deleteUsersSuccess = createAction(
  '[User] Delete Users Success',
  props<{id:number}>()
);

export const deleteUsersFailure = createAction(
  '[User] Delete Users Failure',
  props<{ error: string }>()
);
