import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getBlogRequest } from 'src/app/store/actions/blog.actions';
import { Blog } from 'src/app/model/auth.iterface';
import { getBlog } from 'src/app/store/reducers/blog.reducer';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit, OnDestroy {

  blog$: Observable<Blog>;
  activatedRouteSub: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) {

    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.store.dispatch(getBlogRequest({ id }));
    });
  }
  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
  }

  ngOnInit() {
    this.blog$ = this.store.select(getBlog);
  }

}
