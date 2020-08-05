import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSafetyComponent } from './food-safety.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: FoodSafetyComponent
  }
];

@NgModule({
  declarations: [FoodSafetyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FoodSafetyModule { }
