import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ReportsComponent } from '../components/reports/reports.component';
import { ReportsEditComponent } from '../components/reports-edit/reports-edit.component';

import { AuthGuard } from './auth.guard';

const router: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'reports-edit', component: ReportsEditComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/reports', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  // TODO: for '/records' path use `canActivate: [AuthGuard]`
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
