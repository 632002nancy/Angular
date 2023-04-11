import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IUser } from './app.component';

export const userFeatureKey = 'usersState';

export interface State {   //creating state which holds data user oftype IUser and error of type string
  users:IUser[],
  error:string
}

export const initialState: State = {
  users:[],     //defining the initial value for state data
  error:''
};

export const reducer = createReducer(
  initialState,
);

