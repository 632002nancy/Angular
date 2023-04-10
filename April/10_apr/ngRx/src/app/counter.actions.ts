//to describe the counter actions to increment, decrement, and reset its value
import { createAction } from '@ngrx/store';

//An action is an instruction that you dispatch to the store, optionally with some metadata (payload). Based on the action type, the store decides which operations to execute.


//creating actions
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');