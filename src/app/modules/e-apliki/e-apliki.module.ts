import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EAplikiComponent } from './e-apliki.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: EAplikiComponent
  }
];

@NgModule({
  declarations: [EAplikiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EAplikiModule { }
