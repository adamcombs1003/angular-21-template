import { Routes } from '@angular/router';
import {MatTabs} from './mat-tabs/mat-tabs';

export const routes: Routes = [
  { path: '', redirectTo: 'mat-tabs', pathMatch: 'full' },
  { path: 'mat-tabs', component: MatTabs},
];
