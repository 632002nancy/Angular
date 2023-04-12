import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/user.reducer';

//returns a typed selector function for a feature slice of state
const getUserFeatureState =createFeatureSelector<State>('usersState');

//createSelector will do memoization which means it will keep track of last input params to selector and if they are the same as current ones, it will return last result immediately instead of repeating computation.
//The createSelector can be used to select some data from the state based on several slices of the same state
export const getUsers=createSelector(  //creating selector for user
    getUserFeatureState,
    (state:State)=>state.users
)

export const getError=createSelector(  //creating selector for error
    getUserFeatureState,
    (state:State)=>state.error
)
