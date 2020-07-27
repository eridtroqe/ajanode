import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { CardRealEstateComponent } from '../modules/real-estate/card-real-estate/card-real-estate.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [CardRealEstateComponent],
  exports: [CardRealEstateComponent]
})
export class SharedModule { }
