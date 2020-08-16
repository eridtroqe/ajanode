import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { User, Post, PostResponse, PropertiesResponse, Mode, SearchQuery } from '../../model/auth.iterface';


export const featureKey = 'property';

export const addPropertyRequest = createAction(`[${featureKey}] addPropertyRequest`, props<{ payload: Post, imagePath: Array<File> }>());
export const addPropertySuccess = createAction(`[${featureKey}] addPropertySuccess`);
export const addPropertyFailure = createAction(`[${featureKey}] addPropertyFailure`, props<{ error: string }>());

export const updatePropertyRequest = createAction(`[${featureKey}] updatePropertyRequest`, 
props<{ payload: Post, id: string, imagePath: Array<File> }>());
export const updatePropertySuccess = createAction(`[${featureKey}] updatePropertySuccess`);
export const updatePropertyFailure = createAction(`[${featureKey}] updatePropertyFailure`, props<{ error: string }>());

export const setUpdate = createAction(`[${featureKey}] setUpdate`, props<{ payload: Post, mode: Mode }>());
export const setCreateMode = createAction(`[${featureKey}] setCreateMode`, props<{ mode: Mode }>());

export const deletePropertyRequest = createAction(`[${featureKey}] deletePropertyRequest`, props<{ id: string}>());
export const deletePropertySuccess = createAction(`[${featureKey}] deletePropertySuccess`);
export const deletePropertyFailure = createAction(`[${featureKey}] deletePropertyFailure`, props<{ error: string }>());

export const getPropertiesRequest = createAction(`[${featureKey}] getPropertiesRequest`,
props<{searchQuery?: SearchQuery, postsPerPage: number, currentPage: number }>());
export const getPropertiesSuccess = createAction(`[${featureKey}] getPropertiesSuccess`, props<{ payload: PropertiesResponse }>());
export const getPropertiesFailure = createAction(`[${featureKey}] getPropertiesFailure`, props<{ error: string }>());

export const setQuery = createAction(`[${featureKey}] setQuery`, props<{searchQuery: SearchQuery}>());

export const getExclusiveRequest = createAction(`[${featureKey}] getExclusiveRequest`);
export const getExclusiveSuccess = createAction(`[${featureKey}] getExclusiveSuccess`, props<{ exclusive: Array<Post>  }>());
export const getExclusiveFailure = createAction(`[${featureKey}] getExclusiveFailure`, props<{ error: string }>());

export const getPropertyRequest = createAction(`[${featureKey}] getPropertyRequest`,props<{id: string}>());
export const getPropertySuccess = createAction(`[${featureKey}] getPropertySuccess`, props<{ payload: Post }>());
export const getPropertyFailure = createAction(`[${featureKey}] getPropertyFailure`, props<{ error: string }>());

export const cancelUpload = createAction(`[${featureKey}] cancelUpload`);
export const startedUpload = createAction(`[${featureKey}] startedUpload`);
export const resetUpload = createAction(`[${featureKey}] resetUpload`);
export const progressUpload = createAction(`[${featureKey}] progressUpload`, props<{ progress: number }>());
export const completedUpload = createAction(`[${featureKey}] completedUpload`);
export const uploadFailure = createAction(`[${featureKey}] uploadFailure`, props<{ errorMessage: string }>());

export const globalSuccess = createAction(`[${featureKey}] globalSuccess`, props<{ message: string }>());
export const globalError = createAction(`[${featureKey}] globalError`, props<{ error: string }>());
