import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';

const routes: Route[] = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
