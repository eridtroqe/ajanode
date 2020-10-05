import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getPropertiesRequest } from '../../store/actions/property.actions';
import { Observable, Subscription } from 'rxjs';
import { getPostsPerPage, getPage, getProperties, getTotalProperties, getSearchQuery } from '../../store/reducers/property.reducer';
import { Post, SearchQuery } from 'src/app/model/auth.iterface';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss']
})
export class RealEstateComponent implements OnInit, OnDestroy, OnChanges {

  postsPerPage: number;
  page = 1;
  properties$: Observable<Array<Post>>;
  totalProperties$: Observable<number>;
  query: SearchQuery;
  form: FormGroup;
  subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder) {
    this.properties$ = this.store.select(getProperties);
    this.totalProperties$ = this.store.select(getTotalProperties);
    this.subscriptions.add(this.store.select(getPostsPerPage).subscribe(val => this.postsPerPage = val));
    this.subscriptions.add(this.store.select(getPage).subscribe(val => this.page = val));
    this.subscriptions.add(this.store.select(getSearchQuery).subscribe(val => this.query = val));
  }
  ngOnChanges(changes: SimpleChanges): void {
    window.scroll(0, 0);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof onanimationend)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    this.store.dispatch(getPropertiesRequest({ searchQuery: this.query, postsPerPage: this.postsPerPage, currentPage: this.page }));

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onChangedPage(pageData: PageEvent) {
    this.page = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.store.dispatch(getPropertiesRequest({ searchQuery: this.query, postsPerPage: this.postsPerPage, currentPage: this.page }));
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
