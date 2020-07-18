import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getPropertiesRequest } from '../../store/actions/property.actions';
import { Observable, Subscription } from 'rxjs';
import { getPostsPerPage, getPage, getProperties } from '../../store/reducers/property.reducer';
import { Post } from 'src/app/model/auth.iterface';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit, OnDestroy {

  postsPerPage: number;
  page: number;
  properties$: Observable<Array<Post>>;
  subscriptions = new Subscription();

  constructor(private store: Store<AppState>) {
    this.properties$ = this.store.select(getProperties);
    this.subscriptions.add(this.store.select(getPostsPerPage).subscribe(val => this.postsPerPage = val));
    this.subscriptions.add(this.store.select(getPage).subscribe(val => this.page = val));
  }

  ngOnInit() {
    this.store.dispatch(getPropertiesRequest({ postsPerPage: this.postsPerPage, currentPage: this.page }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
