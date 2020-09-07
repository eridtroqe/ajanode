import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, ErrorInterceptor } from './login/auth-interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertyFormComponent } from './property-form/property-form.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [DashboardComponent, PropertyFormComponent, BlogFormComponent],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class DashboardModule { }
