import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { User, Post, PostResponse, PropertiesResponse } from '../../model/auth.iterface';


export const featureKey = 'property';

export const addPropertyRequest = createAction(`[${featureKey}] addPropertyRequest`, props<{ payload: Post, imagePath: Array<File> }>());
export const addPropertySuccess = createAction(`[${featureKey}] addPropertySuccess`, props<{ payload: PostResponse }>());
export const addPropertyFailure = createAction(`[${featureKey}] addPropertyFailure`, props<{ error: string }>());

export const getPropertiesRequest = createAction(`[${featureKey}] getPropertiesRequest`,
props<{ postsPerPage: number, currentPage: number }>());
export const getPropertiesSuccess = createAction(`[${featureKey}] getPropertiesSuccess`, props<{ payload: PropertiesResponse }>());
export const getPropertiesFailure = createAction(`[${featureKey}] getPropertiesFailure`, props<{ error: string }>());
