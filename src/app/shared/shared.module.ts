import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { CardRealEstateComponent } from '../modules/real-estate/card-real-estate/card-real-estate.component';
import { MaterialModule } from '../material.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    QuillModule.forRoot()
  ],
  declarations: [CardRealEstateComponent],
  exports: [CardRealEstateComponent, MaterialModule, QuillModule]
})
export class SharedModule { }
