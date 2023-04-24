import { createReducer, on } from '@ngrx/store';
import * as QuestionsActions from 'src/app/store/actions/question.actions';
import * as questionModel from 'src/app/model/question.model';

export const questionsFeatureKey = 'questions';

export interface State {
  loadData: questionModel.Question[],
  childData:questionModel.Question[]
  id:number

}
export const initialState: State = {
  loadData: [],
  childData: [],
  id:0
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
  )),
  on(QuestionsActions.QuestionsChild,(state)=>({
    ...state,
  })),
  on(QuestionsActions.QuestionsChildSuccess, (state, { data }) => (
    {
      ...state,
      childData: data
    }
  )),
);

