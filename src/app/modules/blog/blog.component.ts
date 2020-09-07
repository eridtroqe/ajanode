import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getBlogsRequest } from 'src/app/store/actions/blog.actions';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/auth.iterface';
import { getBlogs } from 'src/app/store/reducers/blog.reducer';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs$: Observable<Array<Blog>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(getBlogsRequest({blogsPerPage: 8, currentPage: 1}));

    this.blogs$ = this.store.select(getBlogs);
  }

}
