import {Injectable} from '@angular/core';
import {Actions, ofType , createEffect} from '@ngrx/effects';
import * as WorkoutActions from '../actions/workout.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthState from '../reducers';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { WorkoutService } from 'src/app/services/workout/workout.service';


@Injectable()
export class WorkoutEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store<AuthState.State>,
        private workoutService: WorkoutService
        ) {}


        navigate$ = createEffect(() => this.actions$.pipe(
                ofType(WorkoutActions.navigateToWorkoutOfTheDay),
                map((action) => WorkoutActions.loadWorkoutOfTheDay())
            ));
 
        loadWOD$ = createEffect(() => this.actions$.pipe(
            ofType(WorkoutActions.loadWorkoutOfTheDay),
            switchMap((action) => {
                return this.workoutService.getWorkoutOfTheDay().pipe(
                    map(workout => WorkoutActions.loadedWorkoutOfTheDay({workoutOfTheDay: workout})),
                    catchError(() => of(WorkoutActions.loadedWorkoutOfTheDay({workoutOfTheDay: null}))))
                })
            ));

}