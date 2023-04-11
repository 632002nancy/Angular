import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as UserActions from './user.actions'
import { UserService } from './user.service';
import { mergeMap, map, catchError } from 'rxjs/operators'

//we call services in the effect
@Injectable()
export class UserEffects {


  constructor(private actions$: Actions, private userService :UserService) { }  //actions$ is an observable

  // making an observable to load users 
  // loadUsers$:Observable<Action>=this.actions$.pipe(      //type of the observable is action that comes
  //   ofType(UserActions.loadUsers),                       //ofType works as filter
  //   mergeMap(                                            ////mapping the response from loadUser using mergeMap  
  //     action=>
  //       this.userService.getUser().pipe(
  //         map (users=>{UserActions.loadUsersSuccess({data:users})})
              // catchError(err=>of(UserActions.loadUsersFailure({error:err})))
  //       )
      
  //   )                                                       
  //   )     
  
}
