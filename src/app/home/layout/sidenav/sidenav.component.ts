import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { logout } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { getIsAuth } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter();

  isAuth$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.select(getIsAuth);

  }

  onClose(){
    this.closeSidenav.emit();
  }

  onLogout() {
    this.store.dispatch(logout());
    this.closeSidenav.emit();
  }
}
