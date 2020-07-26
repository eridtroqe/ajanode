import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { User } from '../../model/auth.iterface';


export const featureKey = 'auth';

export const loginRequest = createAction(`[${featureKey}] loginRequest`, props<{ payload: User }>());
export const loginSuccess = createAction(`[${featureKey}] loginSuccess`, props<{ token: string, email: string }>());
export const loginFailure = createAction(`[${featureKey}] loginFailure`, props<{ error: string }>());

export const authTrue = createAction(`[${featureKey}] authTrue`);
export const authFalse = createAction(`[${featureKey}] authFalse`);

export const logout = createAction(`[${featureKey}] logout`);
