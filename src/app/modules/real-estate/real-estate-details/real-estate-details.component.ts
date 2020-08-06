import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription, Observable } from 'rxjs';
import { getPropertyRequest } from '../../../store/actions/property.actions';
import { Post } from '../../../model/auth.iterface';
import { getProperty } from 'src/app/store/reducers/property.reducer';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.scss']
})
export class RealEstateDetailsComponent implements OnInit, OnDestroy {

  property$: Observable<Post>;
  activatedRouteSub: Subscription;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    center: true,
    dots: false,
    margin: 5,
    navSpeed: 700,
    items: 1,
    stagePadding: 0,
  }

  activeSlides: SlidesOutputData;

  slidesStore: any[];

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

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

}
