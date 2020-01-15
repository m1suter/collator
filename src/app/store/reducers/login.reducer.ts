import { Action, createReducer, on, Store } from "@ngrx/store";
import * as LoginActions from '../actions/login.actions';
import { Person } from 'src/app/models/person.model';

export interface State {
    person: Person,
    logedIn: boolean,
    loading: boolean
}

export const initialState: State = {
    person: null,
    logedIn: false,
    loading: false
}

const loginReducer = createReducer(
    initialState,
    on(LoginActions.login, (state, action) => ({...state, loading: true, error: undefined})),
    on(LoginActions.login_success, (state, action) => ({...state, person:action.person, logedIn: true, loading: false, error: undefined})),
    on(LoginActions.login_failed, (state, action) => ({...state})),
    on(LoginActions.login_done, (state, action) => ({...state})),
    on(LoginActions.logout_success, (state, action) => initialState),
);

export function reducer(state: State | undefined, action: Action) {
    return loginReducer(state, action);
}

export const getPerson = (state:State) => state.person;
export const isLogedIn = (state:State) => state.logedIn;
export const isLoading = (state:State) => state.loading;

export const loginReducerFeatureKey = 'login';