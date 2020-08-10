import { createReducer, Action, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as propertyActions from '../actions/property.actions';
import { logout } from '../actions/auth.actions';
import { Post, UploadStatus, Mode } from '../../model/auth.iterface';

export interface State {
    properties: Array<Post>;
    exclusive?: Array<Post>;
    property: Post;
    totalProperties: number;
    postsPerPage: number;
    mode: Mode,
    page: number;
    uploadStatus: UploadStatus;
    progress: number;
    error: string;
    loading: boolean;
}

export const initialState: State = {
    properties: [],
    exclusive: [],
    property: null,
    totalProperties: 0,
    postsPerPage: 8,
    page: 1,
    mode: Mode.Create,
    uploadStatus: UploadStatus.Ready,
    progress: null,
    error: null,
    loading: false
};

const propertyReducer = createReducer(
    initialState,
    on(propertyActions.addPropertyRequest, (state: State, {payload}) => (
        {
            ...state,
            loading: true
        }
    ) ),
    on(propertyActions.addPropertySuccess, (state: State) => (
        {
            ...state,
            loading: false,
            error: null
        }
    ) ),
    on(propertyActions.getPropertySuccess, (state: State, {payload}) => (
        {
            ...state,
            property: payload,
            loading: false,
            error: null
        }
    ) ),
    on(propertyActions.getPropertiesSuccess, (state: State, {payload}) => (
        {
            ...state,
            properties: payload.properties,
            totalProperties: payload.postsCount
        }
    ) ),
    on(propertyActions.setUpdate, (state: State, {payload, mode}) => ({
        ...state,
        property: payload,
        mode
    })),
    on(propertyActions.getExclusiveSuccess, (state: State, {exclusive}) => ({
    ...state,
    exclusive: exclusive.slice().sort((a,b) => a.position - b.position)
    })),
    on(propertyActions.cancelUpload, (state) => ({ ...state, uploadStatus: UploadStatus.Ready, progress: null })),
    on(propertyActions.startedUpload, (state) => ({ ...state, uploadStatus: UploadStatus.Started, progress: 0 })),
    on(propertyActions.progressUpload, (state, { progress }) => ({ ...state, progress })),
    on(propertyActions.completedUpload, (state) => ({ ...state, uploadStatus: UploadStatus.Ready, progress: 0 })),
    on(propertyActions.uploadFailure, (state, {errorMessage}) => ({ ...state, uploadStatus: UploadStatus.Failed, progress: null, error: errorMessage })),
    on(logout, () => initialState),
);

export function reducer(state: State | undefined, action: Action) {
    return propertyReducer(state, action);
}

const propertyState = createFeatureSelector<State>(propertyActions.featureKey);

export const getProperties = createSelector(propertyState, state => state.properties);
export const getProperty = createSelector(propertyState, state => state.property);
export const getPostsPerPage = createSelector(propertyState, state => state.postsPerPage);
export const getPage = createSelector(propertyState, state => state.page);
export const isLoadingProperty = createSelector(propertyState, state => state.loading);
export const getTotalProperties = createSelector(propertyState, state => state.totalProperties);
export const getMode = createSelector(propertyState, state => state.mode);
export const getExclusive = createSelector(propertyState, state => state.exclusive);

export const getStarted = createSelector(propertyState, (state: State): boolean => state.uploadStatus === UploadStatus.Started);
export const getRequested = createSelector(propertyState, (state: State): boolean => state.uploadStatus === UploadStatus.Requested);
export const getReady = createSelector(propertyState, (state: State): boolean => state.uploadStatus === UploadStatus.Ready);
export const getProgress = createSelector(propertyState, (state: State) => state.progress);
export const getFailed = createSelector(propertyState, (state: State): boolean => state.uploadStatus === UploadStatus.Failed);
export const getCompleted = createSelector(propertyState, (state: State): boolean => state.uploadStatus === UploadStatus.Completed);
export const getInProgress = createSelector(propertyState,
    (state: State): boolean => state.progress >= 0 && state.uploadStatus === UploadStatus.Started);