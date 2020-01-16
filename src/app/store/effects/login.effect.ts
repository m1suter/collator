import {Injectable} from '@angular/core';
import {Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import * as LoginActions from '../actions/login.actions';
import * as workoutActions from '../actions/workout.actions';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthState from '../reducers';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, from } from 'rxjs';


@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private loginService:  LoginService,
        private router: Router,
        private store: Store<AuthState.State>
        ) {}

    login$ = createEffect(() => this.actions$.pipe(
            ofType(LoginActions.login),
            switchMap((action) =>
                this.loginService.login(action.username, action.password).pipe(
                    map(person => LoginActions.login_success({person: person}),
                    catchError(error => of(LoginActions.login_failed())
                )
            )
        ))));


    navigateToWorkoutOfTheDay$ = createEffect(() => this.actions$.pipe(
            ofType(LoginActions.login_success),
            tap(() =>{
                this.router.navigate(['/collator/workout/wod'])
            }),
            map(done => LoginActions.login_done())
        ));

     loginDone$ = createEffect(() => this.actions$.pipe(
            ofType(LoginActions.login_done),
            tap(),
            map(() => 
            this.store.dispatch(workoutActions.navigateToWorkoutOfTheDay()))),
            {dispatch: false});


    logout$ = createEffect(() => this.actions$.pipe(
            ofType(LoginActions.logout),
            switchMap((action) =>
                this.loginService.logout().pipe(
                    map((person) => {
                        this.router.navigate(['/login']);
                        return LoginActions.logout_success()
                    },
                    catchError(error => of(LoginActions.logout_failed()))
                ))
            )));
}