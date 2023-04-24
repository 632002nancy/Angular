import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/store/reducer/questions.reducer';

//returns a typed selector function for a feature slice of state
const getUserFeatureState =createFeatureSelector<State>('questions');

export const getPageData=createSelector(  //creating selector for all data
    getUserFeatureState,
    (state:State)=>state.loadData  //selecting the loadData state from the reducer
)
export const getChildData=createSelector(  //creating selector for all data
    getUserFeatureState,
    (state:State)=>state.childData  //selecting the loadData state from the reducer
)