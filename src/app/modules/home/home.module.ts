import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, Route, RouterModule } from '@angular/router';
import { MainSearchComponent } from './main-search/main-search.component';
import { FiltersComponent } from '../../home/layout/filters/filters.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { SharedModule } from '../../shared/shared.module';
import { ExclusiveCarouselComponent } from './exclusive-carousel/exclusive-carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactActionAreaComponent } from './contact-action-area/contact-action-area.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [CommonModule,
            RouterModule.forChild(routes),
            FontAwesomeModule,
            ReactiveFormsModule,
            CarouselModule,
            SharedModule
          ],
  declarations: [
    HomeComponent,
    MainSearchComponent,
    FiltersComponent,
    WhatWeDoComponent,
    ServiceCardComponent,
    CarouselHomeComponent,
    ExclusiveCarouselComponent,
    ContactActionAreaComponent
  ]
})
export class HomeModule {}
