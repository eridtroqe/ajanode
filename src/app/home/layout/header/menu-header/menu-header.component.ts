import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../endpoint/auth.service';
import { Subscription, Observable } from 'rxjs';
import { AppState } from '../../../../store/app.state';
import { Store } from '@ngrx/store';
import { getIsAuth } from '../../../../store/reducers/auth.reducer';
import { Router } from '@angular/router';
import { logout } from '../../../../store/actions/auth.actions';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit, OnDestroy {
  userIsAuth$: Observable<boolean>;
  private authStatusSub: Subscription;

  constructor(private authService: AuthService,
              private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.userIsAuth$ = this.store.select(getIsAuth);


  }

  ngOnDestroy() {
  }

  onLogout() {
    this.store.dispatch(logout())
  }
  onLogin() {
    this.router.navigate(['login']);
  }
}
