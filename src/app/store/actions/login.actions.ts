import {createAction, props} from '@ngrx/store';
import { Person } from 'src/app/models/person.model';

export const login = createAction('[Login] login', props<({username:string, password:string})>());
export const login_success = createAction('[Login] login success', props<{person:Person}>());
export const login_failed = createAction('[Login] login failed');
export const login_done = createAction('[Login] login done');
export const logout = createAction('[Login] Logout');
export const logout_success = createAction('[Login] Logout success');
export const logout_failed = createAction('[Login] Logout failed');
