import { createAction, props } from '@ngrx/store';
import { Blog } from 'src/app/model/auth.iterface';


export const featureKey = 'blog';


export const addBlogRequest = createAction(`[${featureKey}] addBlogRequest`, props<{blog: Blog}>());
export const addBlogSuccess = createAction(`[${featureKey}] addBlogSuccess`);
export const addBlogFailure = createAction(`[${featureKey}] addBlogFailure`, props<{ error: string }>());

export const getBlogsRequest = createAction(`[${featureKey}] getBlogsRequest`, props<{title: string, content: string}>());
export const getBlogsSuccess = createAction(`[${featureKey}] getBlogsSuccess`);
export const getBlogsFailure = createAction(`[${featureKey}] getBlogsFailure`, props<{ error: string }>());
