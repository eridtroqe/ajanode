import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getBlogPaginatorIntl } from './blog-paginator';

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
  declarations: [BlogComponent, BlogDetailsComponent, BlogCardComponent],
  providers: [{ provide: MatPaginatorIntl, useValue: getBlogPaginatorIntl() }]
})
export class BlogModule { }
