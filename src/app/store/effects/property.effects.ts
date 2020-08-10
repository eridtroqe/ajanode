import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { BackendService } from '../../endpoint/backend.service';
import {
    addPropertyRequest,
    addPropertyFailure,
    addPropertySuccess,
    getPropertiesRequest,
    getPropertiesSuccess,
    getPropertiesFailure,
    cancelUpload,
    startedUpload,
    progressUpload,
    completedUpload,
    uploadFailure,
    globalError,
    globalSuccess,
    getPropertyRequest,
    getPropertySuccess,
    getPropertyFailure,
    deletePropertyRequest,
    deletePropertySuccess,
    deletePropertyFailure,
    updatePropertyRequest,
    updatePropertySuccess,
    updatePropertyFailure,
    getExclusiveRequest,
    getExclusiveSuccess,
    getExclusiveFailure
} from '../actions/property.actions';
import { map, catchError, mergeMap, concatMap, takeUntil, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TypedAction } from '@ngrx/store/src/models';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { getPostsPerPage, getPage } from '../reducers/property.reducer';


@Injectable()
export class PropertyEffects {

    constructor(private actions$: Actions,
                private router: Router,
                private store: Store<AppState>,
                private toastr: ToastrService,
                private propertyService: BackendService) { }

    AddPropertyRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPropertyRequest),
            concatMap((action) =>
                this.propertyService.addProperty(action.payload, action.imagePath).pipe(
                    takeUntil(this.actions$.pipe(
                        ofType(cancelUpload)
                    )),
                    switchMap(event => this.getActionHttpEvent(event, addPropertySuccess)),
                    catchError(error => of(addPropertyFailure({ error }), globalError({ error: 'Nje gabim ndodhi' })))
                )
            )
        );
    });

    OnAddPropertySuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPropertySuccess),
            tap(() => this.router.navigate(['real-estate'])));
    }, { dispatch: false });

    GetPropertiesRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPropertiesRequest),
            mergeMap((action) =>
                this.propertyService.getProperties(action.postsPerPage, action.currentPage).pipe(
                    map(data => {
                        return getPropertiesSuccess({ payload: data })
                    }
                    ),
                    catchError(error => of(getPropertiesFailure({ error }))))
            ),
        );
    });

    showToastrError$ = createEffect(() => this.actions$.pipe(
        ofType(globalError),
        tap(action => {
            const errorMessage = action.error ? action.error : 'An error ocurred';
            this.toastr.error(errorMessage, 'FAILED');
        })
    ), { dispatch: false });

    showToastrSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(globalSuccess),
        tap(action => {
            const successMessage = action.message ? action.message : 'Completed successfully';
            this.toastr.success(successMessage, 'SUCCESS');
        })
    ), { dispatch: false });


    GetPropertyRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPropertyRequest),
            map(action => action.id),
            mergeMap((id) =>
                this.propertyService.getProperty(id).pipe(
                    map(data => getPropertySuccess({ payload: data })),
                    catchError(error => of(getPropertyFailure({ error }))))
            ),
        );
    });

    DeletePropertyRequest$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(deletePropertyRequest),
                map(action => action.id),
                withLatestFrom(this.store.select(getPostsPerPage), 
                               this.store.select(getPage)), 
                mergeMap(([id, postsPerPage, currentPage]) =>
                    this.propertyService.deleteProperty(id).pipe(
                        switchMap(data => [deletePropertySuccess(), 
                                          globalSuccess({message: 'Prona u fshi me sukses!'}),
                                          getPropertiesRequest({postsPerPage, currentPage})
                                          ]),
                        catchError(error => of(deletePropertyFailure({error}), 
                                               globalError({error: 'Një gabim ndodhi gjatë fshirjes së pronës!'}))))
                    ),
        );
    });

    GetExclusiveProperties$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(getExclusiveRequest),
                mergeMap(() =>
                    this.propertyService.getExclusive().pipe(
                        map(data => getExclusiveSuccess({exclusive: data.exclusive})),
                        catchError(error => of(getExclusiveFailure({error}))))
                    ),
        );
    });


    UpdatePropertyRequest$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(updatePropertyRequest),
                withLatestFrom(this.store.select(getPostsPerPage), 
                this.store.select(getPage)), 
                mergeMap(([action, postsPerPage, currentPage]) =>
                    this.propertyService.updateProperty(action.id, action.payload, action.imagePath).pipe(
                        switchMap(data =>[ updatePropertySuccess(),
                             globalSuccess({message: 'Prona u ndryshua me sukses!'}),
                             getPropertiesRequest({postsPerPage, currentPage})
                        ]),
                        catchError(error => of(updatePropertyFailure({error}), 
                        globalError({error: 'Një gabim ndodhi gjatë ndryshimit së pronës!'}))))
                    ),
        );
    });

    getActionHttpEvent(event: HttpEvent<any>, refresh?: () => TypedAction<string>) {
        switch (event.type) {
            case HttpEventType.Sent:
                return [startedUpload()];
            case HttpEventType.UploadProgress:
                return [progressUpload({ progress: Math.round((100 * event.loaded) / event.total) })];
            case HttpEventType.ResponseHeader:
            case HttpEventType.Response:
                if (event.status === 201) {
                    return [completedUpload(), globalSuccess({ message: 'Prona u shtua me sukses!' }), refresh()];
                } else {
                    return [uploadFailure({ errorMessage: event.statusText })];
                }

            default:
                return [uploadFailure({ errorMessage: 'An unknown error occurred' })];
        }
    }

}