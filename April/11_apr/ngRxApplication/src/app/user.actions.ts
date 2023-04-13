import { createAction, props } from '@ngrx/store';
import { IUser } from './app.component';

//The createAction function returns a function, that when called returns an object in the shape of the Action interface
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

export const putUser = createAction(
  '[User] Put Users'
);

export const putUsersSuccess = createAction(
  '[User] Put Users Success',
  props<{data:IUser}>()
);

export const putUsersFailure = createAction(
  '[User] Put Users Failure',
  props<{ error: string }>()
);

export const postUser = createAction(
  '[User] Post Users'
);

export const postUsersSuccess = createAction(
  '[User] Post Users Success',
  props<{data:IUser}>()
);

export const postUsersFailure = createAction(
  '[User] Post Users Failure',
  props<{ error: string }>()
);

export const deleteUser = createAction(
  '[User] Delete Users',
);

export const deleteUsersSuccess = createAction(
  '[User] Delete Users Success',
  props<{data:string}>()
);

export const deleteUsersFailure = createAction(
  '[User] Delete Users Failure',
  props<{ error: string }>()
);
