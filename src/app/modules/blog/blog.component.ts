import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getBlogsRequest } from 'src/app/store/actions/blog.actions';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/auth.iterface';
import { getBlogs, totalBlogs, isLoadingBlogs } from 'src/app/store/reducers/blog.reducer';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs$: Observable<Array<Blog>>;
  page = 1;
  blogsPerPage: number;
  totalBlogs$: Observable<number>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(getBlogsRequest({blogsPerPage: 8, currentPage: 1}));
    this.totalBlogs$ = this.store.select(totalBlogs);
    this.isLoading$ = this.store.select(isLoadingBlogs);

    this.blogs$ = this.store.select(getBlogs);
  }

  onChangedPage(pageData: PageEvent) {
    this.page = pageData.pageIndex + 1;
    this.blogsPerPage = pageData.pageSize;
    this.store.dispatch(getBlogsRequest({ blogsPerPage: this.blogsPerPage, currentPage: this.page }));
  }

}
