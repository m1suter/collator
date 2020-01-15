import {createAction, props} from '@ngrx/store';
import { Workout } from 'src/app/models/workout.model';

export const loadWorkoutOfTheDay = createAction('[Workout] load Workout of the day');
export const loadedWorkoutOfTheDay = createAction('[Workout] Workout of the day loaded', props<({workoutOfTheDay: Workout})>());
export const navigateToWorkoutOfTheDay = createAction('[Workout] Navigate to workout of the day')