import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentalConsultancyComponent } from './environmental-consultancy.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: EnvironmentalConsultancyComponent
  }
];

@NgModule({
  declarations: [EnvironmentalConsultancyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EnvironmentalConsultancyModule { }
