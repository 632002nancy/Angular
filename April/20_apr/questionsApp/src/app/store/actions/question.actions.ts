import { createAction, props } from '@ngrx/store';
import * as questionModel from 'src/app/model/question.model';

export const Questions = createAction(
  '[Question]  Questions'
);

export const QuestionsSuccess = createAction(
  '[Question]  Questions Success',
  props<{ data: questionModel.Question[] }>()
);

export const QuestionsFailure = createAction(
  '[Question]  Questions Failure',
  props<{ error: string }>()
);
