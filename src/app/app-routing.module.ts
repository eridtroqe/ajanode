import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/dashboard/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => m.AboutusModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'real-estate',
    loadChildren: () => import('./modules/real-estate/real-estate.module').then(m => m.RealEstateModule)
  },
  {
    path: 'e-apliki',
    loadChildren: () => import('./modules/e-apliki/e-apliki.module').then(m => m.EAplikiModule)
  },
  {
    path: 'environmental-consultancy',
    loadChildren: () => import('./modules/environmental-consultancy/environmental-consultancy.module')
    .then(m => m.EnvironmentalConsultancyModule)
  },
  {
    path: 'food-safety',
    loadChildren: () => import('./modules/food-safety/food-safety.module').then(m => m.FoodSafetyModule)
  },
  {
    path: 'intermediation',
    loadChildren: () => import('./modules/intermediation/intermediation.module').then(m => m.IntermediationModule)
  },
  {
    path: 'real-estate-appraisal',
    loadChildren: () => import('./modules/real-estate-appraisal/real-estate-appraisal.module').then(m => m.RealEstateAppraisalModule)
  },
  {
    path: 'topographic-works',
    loadChildren: () => import('./modules/topographic-works/topographic-works.module').then(m => m.TopographicWorksModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
