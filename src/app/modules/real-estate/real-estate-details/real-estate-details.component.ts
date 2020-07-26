import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription, Observable } from 'rxjs';
import { getPropertyRequest } from '../../../store/actions/property.actions';
import { Post } from '../../../model/auth.iterface';
import { getProperty } from 'src/app/store/reducers/property.reducer';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.scss']
})
export class RealEstateDetailsComponent implements OnInit, OnDestroy {

  property$: Observable<Post>;
  activatedRouteSub: Subscription;
  constructor(private store: Store<AppState>,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.store.dispatch(getPropertyRequest({ id }));
    });
  }

  ngOnInit() {
    this.property$ = this.store.select(getProperty);
  }

  ngOnDestroy() {
    this.activatedRouteSub.unsubscribe();
  }

}
