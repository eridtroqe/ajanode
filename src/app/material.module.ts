import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';






const material = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatChipsModule,
  MatDividerModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
