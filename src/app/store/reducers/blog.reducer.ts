import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as blogActions from '../actions/blog.actions';
import { Blog } from 'src/app/model/auth.iterface';

export interface State {
    blogs: Array<Blog>;
    blog: Blog;
    blogsCount: number;
    loading: boolean;
    error: string;
}


export const initialState: State = {
    blogs: [],
    blog: null,
    blogsCount: 0,
    loading: false,
    error: null
};

const blogReducer = createReducer(
    initialState,
    on(blogActions.addBlogRequest, (state: State) => ({ ...state, loading: true, error: null })),
    on(blogActions.addBlogSuccess, (state: State) => ({ ...state, loading: false })),
    on(blogActions.addBlogFailure, (state: State, { error }) => ({ ...state, loading: false, error })),
    on(blogActions.getBlogsRequest, (state: State) => ({ ...state, loading: true, error: null })),
    on(blogActions.getBlogsSuccess, (state: State, { blogs }) => (
        {
            ...state,
            blogs: blogs.blogs,
            blogsCount: blogs.blogsCount,
            loading: false,
            error: null
        }
    )),
    on(blogActions.getBlogsFailure, (state: State, { error }) => ({ ...state, loading: false, error })),
    on(blogActions.getBlogRequest, (state: State) => ({ ...state, loading: true, error: null })),
    on(blogActions.getBlogSuccess, (state: State, { payload }) => ({ ...state, blog: payload, loading: false, error: null })),
    on(blogActions.getBlogFailure, (state: State, { error }) => ({ ...state, loading: false, error })),
    on(blogActions.getLastBlogSuccess, (state: State, {blog}) => ({...state, blog}))
);

export function reducer(state: State | undefined, action: Action) {
    return blogReducer(state, action);
}


const blogsState = createFeatureSelector<State>(blogActions.featureKey);

export const getBlogs = createSelector(blogsState, state => state.blogs);
export const getBlog = createSelector(blogsState, state => state.blog);
export const totalBlogs = createSelector(blogsState, state => state.blogsCount);
export const isLoadingBlogs = createSelector(blogsState, state => state.loading);
