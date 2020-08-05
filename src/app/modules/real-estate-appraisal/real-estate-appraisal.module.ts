import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateAppraisalComponent } from './real-estate-appraisal.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: RealEstateAppraisalComponent
  }
];

@NgModule({
  declarations: [RealEstateAppraisalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RealEstateAppraisalModule { }
