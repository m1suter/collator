import * as fromLogin from './login.reducer';
import * as fromWorkout from './workout.reducer';
import * as LoginActions from '../actions/login.actions';
import { createSelector, createFeatureSelector, ActionReducerMap,} from '@ngrx/store';

export interface State {
    login: fromLogin.State,
    workout: fromWorkout.State
}

export const reducers: ActionReducerMap<State> = {
    login: fromLogin.reducer,
    workout: fromWorkout.reducer
}


export function clearState(reducer) {
    return function(state, action) {
        console.log('state', state);
        console.log('action', action);
        if(action.type == LoginActions.logout_success) {
            state = undefined;
        }
        
        return reducer(state, action);
    }
};





export const selectLoginState = createFeatureSelector<fromLogin.State>(fromLogin.loginReducerFeatureKey);

export const isLogedIn = createSelector(selectLoginState, (state) => state.logedIn);
export const isLoadingLogin = createSelector(selectLoginState, (state) => state.loading);

export const selectWorkoutState = createFeatureSelector<fromWorkout.State>(fromWorkout.workoutReducerFeatureKey);

export const isLoadingWorkout = createSelector(selectWorkoutState, (state) => state.loading);
export const getWorkoutOfTheDay = createSelector(selectWorkoutState, (state) => state.workoutOfTheDay);

