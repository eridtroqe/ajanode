import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './home/layout/sidenav/sidenav.component';
import { FooterComponent } from './home/layout/footer/footer.component';
import { HeaderComponent } from './home/layout/header/header.component';
import { ContactHeaderComponent } from './home/layout/header/contact-header/contact-header.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MenuHeaderComponent } from './home/layout/header/menu-header/menu-header.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './modules/dashboard/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor, ErrorInterceptor } from './modules/dashboard/login/auth-interceptor';
import { AuthGuard } from './auth.guard';
import { AuthEffects } from './store/effects/auth.effects';
import { PropertyEffects } from './store/effects/property.effects';
import { reducers } from './store/app.state';
import {ToastrModule} from 'ngx-toastr';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    HeaderComponent,
    ContactHeaderComponent,
    MenuHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    GoogleMapsModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
    StoreModule.forRoot(reducers, {}),
    ToastrModule.forRoot({
                          // positionClass: 'toast-top-center',
                          closeButton: true,
                          preventDuplicates: true
                        }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects, PropertyEffects])
  ],
  providers: [
    AuthGuard,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
