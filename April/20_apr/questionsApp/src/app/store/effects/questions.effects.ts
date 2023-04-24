import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import * as UserAction from 'src/app/store/actions/question.actions'

@Injectable()
export class QuestionsEffects {

  constructor(private actions$: Actions, private dataservice: DataService) { }
  loadPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.Questions),
      exhaustMap(() => {
        return this.dataservice.getJsonData().pipe(
          map((load) =>
            UserAction.QuestionsSuccess({ data: load }))
        )
      })
    )
  )
}
