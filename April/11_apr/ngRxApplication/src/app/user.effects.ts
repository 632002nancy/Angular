//effects are used to call service
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as UserActions from './user.actions'
import { UserService } from 'src/app/user.service';
import { map, catchError, exhaustMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

//we call services in the effect
@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private http: HttpClient) { }  //actions$ is an observable
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),                    //does the work of filtering
      exhaustMap(() => {
        return this.userService.getUser().pipe(
          map((Userdata) =>
          UserActions.loadUsersSuccess({ data:Userdata })),
          catchError(err => of(UserActions.loadUsersFailure({ error: err })))
        )
      })
    ))
}