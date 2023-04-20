import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromQuestions from '../store/reducer/questions.reducer';


export interface State {

  [fromQuestions.questionsFeatureKey]: fromQuestions.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromQuestions.questionsFeatureKey]: fromQuestions.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
