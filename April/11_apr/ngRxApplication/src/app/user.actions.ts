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

