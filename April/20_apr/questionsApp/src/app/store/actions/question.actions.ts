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

export const QuestionsChild = createAction(
  '[Question]  Questions Child',
  props<{id:number}>()
);

export const QuestionsChildSuccess = createAction(
  '[Question]  Questions Child Success',
  props<{ data: questionModel.Question[] }>()
);

export const QuestionsChildFailure = createAction(
  '[Question]  Questions Child Failure',
  props<{ error: string }>()
);
