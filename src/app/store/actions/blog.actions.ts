import { createAction, props } from '@ngrx/store';
import { Blog, BlogsResponse } from 'src/app/model/auth.iterface';


export const featureKey = 'blog';


export const addBlogRequest = createAction(`[${featureKey}] addBlogRequest`, props<{ blog: Blog }>());
export const addBlogSuccess = createAction(`[${featureKey}] addBlogSuccess`);
export const addBlogFailure = createAction(`[${featureKey}] addBlogFailure`, props<{ error: string }>());

export const getBlogsRequest = createAction(`[${featureKey}] getBlogsRequest`, props<{ blogsPerPage: number, currentPage: number }>());
export const getBlogsSuccess = createAction(`[${featureKey}] getBlogsSuccess`, props<{ blogs: BlogsResponse }>());
export const getBlogsFailure = createAction(`[${featureKey}] getBlogsFailure`, props<{ error: string }>());

export const getBlogRequest = createAction(`[${featureKey}] getBlogRequest`, props<{ id: string }>());
export const getBlogSuccess = createAction(`[${featureKey}] getBlogSuccess`, props<{ payload: Blog }>());
export const getBlogFailure = createAction(`[${featureKey}] getBlogFailure`, props<{ error: string }>());

export const deleteBlogRequest = createAction(`[${featureKey}] deleteBlogRequest`, props<{ id: string}>());
export const deleteBlogSuccess = createAction(`[${featureKey}] deleteBlogSuccess`);
export const deleteBlogFailure = createAction(`[${featureKey}] deleteBlogFailure`, props<{ error: string }>());

export const getLastBlogRequest = createAction(`[${featureKey}] getLastBlogRequest`);
export const getLastBlogSuccess = createAction(`[${featureKey}] getLastBlogSuccess`, props<{blog: Blog}>());
export const getLastBlogFailure = createAction(`[${featureKey}] getLastBlogFailure`, props<{ error: string }>());