import {Injectable} from '@angular/core';
import {Actions, ofType, Effect } from '@ngrx/effects';
import * as WorkoutActions from '../actions/workout.actions';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthState from '../reducers';
import { switchMap, catchError, map, tap, take, reduce } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { Workout } from 'src/app/models/workout.model';
import { dispatch } from 'rxjs/internal/observable/pairs';


@Injectable()
export class WorkoutEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store<AuthState.State>,
        private workoutService: WorkoutService
        ) {}

        @Effect()
        navigate$ = this.actions$.pipe(
            ofType(WorkoutActions.navigateToWorkoutOfTheDay),
            map((action) => WorkoutActions.loadWorkoutOfTheDay())
        )

        @Effect() 
        loadWOD$ = this.actions$.pipe(
        ofType(WorkoutActions.loadWorkoutOfTheDay),
        switchMap((action) => {
            return this.workoutService.getWorkoutOfTheDay().pipe(
                map(workout => WorkoutActions.loadedWorkoutOfTheDay({workoutOfTheDay: workout})),
                catchError(() => of(WorkoutActions.loadedWorkoutOfTheDay({workoutOfTheDay: null}))))
            })
        );

}