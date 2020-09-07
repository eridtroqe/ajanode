import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: ':id',
    component: BlogDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [BlogComponent, BlogDetailsComponent]
})
export class BlogModule { }
