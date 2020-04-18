import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { Route, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Route[] = [
  {
    path: '',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [AboutusComponent]
})
export class AboutusModule { }
