import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';

const getUserFeatureState =createFeatureSelector<State>('usersState');

//createSelector will do memoization which means it will keep track of last input params to selector and if they are the same as current ones, it will return last result immediately instead of repeating computation.

export const getUsers=createSelector(  //creating selector for user
    getUserFeatureState,
    state=>state.users
)

export const getError=createSelector(  //creating selector for error
    getUserFeatureState,
    state=>state.error
)
