import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { BackendService } from 'src/app/endpoint/backend.service';
import { addBlogRequest, addBlogFailure, addBlogSuccess, getBlogsRequest, getBlogsSuccess, getBlogsFailure, getBlogRequest, getBlogFailure, getBlogSuccess, deleteBlogRequest, deleteBlogSuccess, deleteBlogFailure, getLastBlogRequest, getLastBlogSuccess, getLastBlogFailure } from '../actions/blog.actions';
import { of } from 'rxjs';
import { globalSuccess } from '../actions/property.actions';

@Injectable()
export class BlogEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private be: BackendService) { }

    OnAddBlogRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addBlogRequest),
            map(action => action.blog),
            mergeMap((blog) =>
                this.be.addBlog(blog).pipe(
                    switchMap(data => [addBlogSuccess(),
                    globalSuccess({ message: 'Blogu u shtua me sukses' })
                    ]),
                    catchError(error => of(addBlogFailure({ error }))))
            )
        );
    });

    OnAddBlogSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addBlogSuccess),
            tap(() => this.router.navigate(['blog'])));
    }, { dispatch: false });

    OnGetBlogsRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getBlogsRequest),
            mergeMap((action) =>
                this.be.getBlogs(action.blogsPerPage, action.currentPage).pipe(
                    map(blogs => getBlogsSuccess({ blogs })),
                    catchError(error => of(getBlogsFailure({ error }))))
            ),
        );
    });

    OnGetBlogRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getBlogRequest),
            map(action => action.id),
            mergeMap((id) =>
                this.be.getBlog(id).pipe(
                    map(data => getBlogSuccess({ payload: data })),
                    catchError(error => of(getBlogFailure({ error }))))
            ),
        );
    });

    OnDeleteBlogRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteBlogRequest),
            map(action => action.id),
            mergeMap((id) =>
                this.be.deleteBlog(id).pipe(
                    mergeMap(data => [deleteBlogSuccess()]),
                    catchError(error => of(deleteBlogFailure({ error }))))
            ),
        );
    });

    OnGetLastBlogRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getLastBlogRequest),
            mergeMap(() =>
                this.be.getLastBlog().pipe(
                    map(blog => getLastBlogSuccess({ blog })),
                    catchError(error => of(getLastBlogFailure({ error }))))
            ),
        );
    });

    // OnDeleteSuccess$ = createEffect(() => {
    //     return this.actions$.pipe(
    //             ofType(deleteBlogSuccess),
    //             map(() =>  getBlogsRequest({blogsPerPage: 8, currentPage: 1})));
    // });
}
