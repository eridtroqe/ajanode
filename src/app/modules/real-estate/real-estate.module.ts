import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealEstateComponent } from './real-estate.component';
import { MaterialModule } from '../../material.module';
import { Route, RouterModule } from '@angular/router';
import { CardRealEstateComponent } from './card-real-estate/card-real-estate.component';
import { RealEstateDetailsComponent } from './real-estate-details/real-estate-details.component';
import { InfoElementComponent } from './info-element/info-element.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RightSideInfoComponent } from './right-side-info/right-side-info.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Route[] = [
  {
    path: '',
    component: RealEstateComponent
  },
  {
    path: ':id',
    component: RealEstateDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
                 RealEstateComponent,
                 RealEstateDetailsComponent, 
                 InfoElementComponent,
                 RightSideInfoComponent
                ]
})
export class RealEstateModule { }
