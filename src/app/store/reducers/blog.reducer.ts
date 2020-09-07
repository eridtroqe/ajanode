import { createReducer, on, Action } from '@ngrx/store';
import * as blogActions from '../actions/blog.actions';
import { Blog } from 'src/app/model/auth.iterface';

export interface State {
    blogs: Array<Blog>;
    blog: Blog;
    loading: boolean;
    error: string;
}


export const initialState: State = {
    blogs: [],
    blog: null,
    loading: false,
    error: null
};

const blogReducer = createReducer(
    initialState
);

export function reducer(state: State | undefined, action: Action) {
    return blogReducer(state, action);
}
