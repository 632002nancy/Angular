import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
//Reducers are responsible for modifying the state and returning a new state object with the modifications.
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,   //current state 
  on(increment, (state) => state + 1), //actions
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);