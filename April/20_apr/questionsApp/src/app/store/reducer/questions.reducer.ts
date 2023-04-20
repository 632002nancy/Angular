import { createReducer, on } from '@ngrx/store';
import * as QuestionsActions from 'src/app/store/actions/question.actions';

export const questionsFeatureKey = 'questions';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

