import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopographicWorksComponent } from './topographic-works.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TopographicWorksComponent
  }
];

@NgModule({
  declarations: [TopographicWorksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopographicWorksModule { }
