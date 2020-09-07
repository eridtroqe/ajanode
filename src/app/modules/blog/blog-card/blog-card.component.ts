import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/model/auth.iterface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { deleteBlogRequest } from 'src/app/store/actions/blog.actions';
import { Observable } from 'rxjs';
import { getIsAuth } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog: Blog;
  isAuth$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(getIsAuth);
  }

  navigateToDetails(id: string) {
    this.router.navigateByUrl(`blog/${id}`);
  }

  onDeleteBlog(id: string) {
    this.store.dispatch(deleteBlogRequest({ id }));
  }

}
