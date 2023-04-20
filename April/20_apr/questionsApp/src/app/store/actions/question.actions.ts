import { createAction, props } from '@ngrx/store';

export const yQuestions = createAction(
  '[Question]  Questions'
);

export const yQuestionsSuccess = createAction(
  '[Question]  Questions Success',
  props<{ data: any }>()
);

export const yQuestionsFailure = createAction(
  '[Question]  Questions Failure',
  props<{ error: any }>()
);
