import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntermediationComponent } from './intermediation.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: IntermediationComponent
  }
];


@NgModule({
  declarations: [IntermediationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IntermediationModule { }
