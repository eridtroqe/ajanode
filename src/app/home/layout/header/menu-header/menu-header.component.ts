import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../endpoint/auth.service';
import { Subscription, Observable } from 'rxjs';
import { AppState } from '../../../../store/app.state';
import { Store } from '@ngrx/store';
import { getIsAuth } from '../../../../store/reducers/auth.reducer';
import { Router } from '@angular/router';
import { logout } from '../../../../store/actions/auth.actions';
import { setUpdate, setCreateMode } from '../../../../store/actions/property.actions';
import { Mode } from '../../../../model/auth.iterface';

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

  navigateToDashboard(){
    this.store.dispatch(setCreateMode({mode: Mode.Create}));
    // this.router.navigate(['dashboard']);
  }

  onLogout() {
    this.store.dispatch(logout());
  }
  onLogin() {
    this.router.navigate(['login']);
  }
}
