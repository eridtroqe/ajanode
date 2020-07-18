import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateComponent } from './real-estate.component';
import { MaterialModule } from 'src/app/material.module';
import { Route, RouterModule } from '@angular/router';
import { CardRealEstateComponent } from './card-real-estate/card-real-estate.component';

const routes: Route[] = [
  {
    path: '',
    component: RealEstateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [RealEstateComponent, CardRealEstateComponent]
})
export class RealEstateModule { }
