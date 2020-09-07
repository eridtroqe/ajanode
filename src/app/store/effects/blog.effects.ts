import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { BackendService } from 'src/app/endpoint/backend.service';
import { addBlogRequest, addBlogFailure, addBlogSuccess, getBlogsRequest, getBlogsSuccess, getBlogsFailure, getBlogRequest, getBlogFailure, getBlogSuccess } from '../actions/blog.actions';
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
                    this.be.getBlogs(action.blogsPerPage, action.currentPage ).pipe(
                        map(blogs => getBlogsSuccess({ blogs })),
                        catchError(error => of(getBlogsFailure({ error }))))
                    ),
        );
    });

  OnGetBlogRequest$ = createEffect(() => {
      return this.actions$.pipe(
              ofType(getBlogRequest),
              map( action => action.id),
              mergeMap((id) =>
                  this.be.getBlog(id).pipe(
                      map(data => getBlogSuccess({ payload: data })),
                      catchError(error => of(getBlogFailure({ error }))))
                  ),
      );
  });
}
