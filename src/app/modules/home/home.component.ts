import { Component, OnInit, HostListener } from '@angular/core';
import { faHome, faHandHoldingUsd, faMapMarkedAlt, faAt, faLock, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../model/auth.iterface';
import { getProperties, getExclusive } from 'src/app/store/reducers/property.reducer';
import { tap } from 'rxjs/operators';
import { getPropertiesRequest, getExclusiveRequest } from 'src/app/store/actions/property.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faHome = faHome;
  faHandHoldingUsd = faHandHoldingUsd;
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvira = faEnvira;
  faAt = faAt;
  faLock = faLock;
  faHandsHelping = faHandsHelping;
  recentProperties$: Observable<Array<Post>>;
  exclusiveProp$: Observable<Array<Post>>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getPropertiesRequest({ postsPerPage: 8, currentPage: 1 }));
    this.store.dispatch(getExclusiveRequest());
    this.recentProperties$ = this.store.select(getProperties);
    this.exclusiveProp$ = this.store.select(getExclusive);
  }
}
