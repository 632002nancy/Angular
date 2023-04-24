import { createReducer, on } from '@ngrx/store';
import * as QuestionsActions from 'src/app/store/actions/question.actions';
import * as questionModel from 'src/app/model/question.model'
export const questionsFeatureKey = 'questions';

export const userFeatureKey = 'questionPage';    //store name

export interface State {
  loadData: questionModel.Question[],

}
export const initialState: State = {
  loadData: [],
};

export const reducer = createReducer(
  initialState,
  on(QuestionsActions.Questions, (state) => ({
    ...state,
  })),
  on(QuestionsActions.QuestionsSuccess, (state, { data }) => (
    {
      ...state,
      loadData: data
    }
  ))
);

