import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';


const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
