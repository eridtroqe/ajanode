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
    getPropertiesFailure
} from '../actions/property.actions';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';


@Injectable()
export class PropertyEffects {

    constructor(private actions$: Actions,
        private router: Router,
        private propertyService: BackendService) { }

    AddPropertyRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPropertyRequest),
            mergeMap((action) =>
                this.propertyService.addProperty(action.payload, action.imagePath).pipe(
                    map(data => addPropertySuccess({ payload: data })),
                    catchError(error => of(addPropertyFailure({ error }))))
            ),
        );
    });


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

}