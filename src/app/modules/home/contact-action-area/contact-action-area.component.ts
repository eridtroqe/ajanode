import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/auth.iterface';
import { getBlog } from 'src/app/store/reducers/blog.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-action-area',
  templateUrl: './contact-action-area.component.html',
  styleUrls: ['./contact-action-area.component.scss']
})
export class ContactActionAreaComponent implements OnInit {

  latestBlog$: Observable<Blog>;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.latestBlog$ = this. store.select(getBlog);
  }
  navigateToBlog(id){
    this.router.navigateByUrl(`blog/${id}`);
  }

}
