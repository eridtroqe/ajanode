import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../../../endpoint/auth.service';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { loginRequest } from '../../../store/actions/auth.actions';
import { isLoadingAuth } from '../../../store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>;
  private authStatusSub: Subscription;


  constructor(public authService: AuthService, private store: Store<AppState>) {
  }

  ngOnInit() {

    // this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
    //   authStatus => {
    //     this.isLoading = false;
    //   }
    // );
    this.isLoading$ = this.store.select(isLoadingAuth);

  }

  // ngOnDestroy() {
  //   this.authStatusSub.unsubscribe();
  // }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    // this.authService.login(form.value.email, form.value.password);
    this.store.dispatch(loginRequest({ payload: { email: form.value.email, password: form.value.password } }));
  }
}
