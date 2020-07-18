import { createReducer, Action, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as propertyActions from '../actions/property.actions';
import { logout } from '../actions/auth.actions';
import { Post } from 'src/app/model/auth.iterface';

export interface State {
    properties: Array<Post>;
    property: Post;
    postsPerPage: number;
    page: number;
}

export const initialState: State = {
    properties: [],
    property: null,
    postsPerPage: 8,
    page: 1
};

const propertyReducer = createReducer(
    initialState,
    on(propertyActions.addPropertySuccess, (state: State, {payload}) => (
        {
            ...state,
            property: payload.post
        }
    ) ),
    on(propertyActions.getPropertiesSuccess, (state: State, {payload}) => (
        {
            ...state,
            properties: payload.properties
        }
    ) ),
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
