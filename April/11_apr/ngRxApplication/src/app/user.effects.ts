//effects are used to call service
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as UserActions from './user.actions'
import { UserService } from 'src/app/user.service';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

//we call services in the effect
@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private http: HttpClient) { }  //actions$ is an observable
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),             //does the work of filtering (here filters the action loadUsers)
      exhaustMap(() => {          //s if a new value is coming from the source observable, but the previously mapped observable is not yet completed, the new value coming from the source observable will be ignored. It will be ignored until the previously returned observable has completed. After that new values from the source observable will be mapped to the inner observable again
        return this.userService.getUser().pipe(
          map((Userdata) =>
          UserActions.loadUsersSuccess({ data:Userdata })),
          catchError(err => of(UserActions.loadUsersFailure({ error: err })))
        )
      })
    ));
    deleteUser$= createEffect(()=>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(()=>{
        return this.userService.deleteUsers('6433af5fa2b07df98ebf67ae').pipe(
          map((Userdata)=>
          UserActions.deleteUsersSuccess({data:"Deleted Successfully"})),
          catchError(err=> of(UserActions.deleteUsersFailure({error:err})))
        )
      })
    ))
    postUser$= createEffect(()=>
    this.actions$.pipe(
      ofType(UserActions.postUser),
      exhaustMap(()=>{
        return this.userService.postUsers({name:"nancy verma",email:"nancyverma@gmail",password:"123"}).pipe(
          map((Userdata)=>
          UserActions.postUsersSuccess({data:Userdata})),
          catchError(err=> of(UserActions.postUsersFailure({error:err})))
        )
      })
    ));
    
    putUser$= createEffect(()=>
    this.actions$.pipe(
      ofType(UserActions.putUser),
      exhaustMap(()=>{
        return this.userService.putUsers("64379e27c02bdf609e9ae23a",{name:"nancy verma",email:"nancy@gmail",password:"123"}).pipe(
          map((Userdata)=>
          UserActions.putUsersSuccess({data:Userdata})),
          catchError(err=> of(UserActions.putUsersFailure({error:err})))
        )
      })
    ));

}