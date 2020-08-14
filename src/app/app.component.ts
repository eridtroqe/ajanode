import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './endpoint/auth.service';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { authFalse, authTrue } from './store/actions/auth.actions';
import { BackendService } from './endpoint/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient,
              private authService: AuthService,
              private be: BackendService,
              private store: Store<AppState>) {}

  ngOnInit() {
    const authToken = this.authService.getToken();
    if (!authToken) {
      this.store.dispatch(authFalse());
    } else {
      this.store.dispatch(authTrue());
    }

  }

}
