import { Action, createReducer, on, Store } from "@ngrx/store";
import * as WorkoutActions from '../actions/workout.actions';
import { Workout } from 'src/app/models/workout.model';

export interface State {
    loading: boolean,
    workoutOfTheDay: Workout
}

export const initialState: State = {
    loading: false,
    workoutOfTheDay: null
}

const workoutReducer = createReducer(
    initialState,
    on(WorkoutActions.loadWorkoutOfTheDay, (state, action) => ({...state, loading: true, workoutOfTheDay: null})),
    on(WorkoutActions.loadedWorkoutOfTheDay, (state, action) => ({...state, loading: false, workoutOfTheDay: action.workoutOfTheDay,})),
    on(WorkoutActions.navigateToWorkoutOfTheDay, (state, action) => ({...state, loading: true}))
);

export function reducer(state: State | undefined, action: Action) {
    return workoutReducer(state, action);
}

export const isLoading = (state: State) => state.loading;
export const getWorkoutOfTheDay = (state: State) => state.workoutOfTheDay;

export const workoutReducerFeatureKey = 'workout';