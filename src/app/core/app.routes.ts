import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ReportsComponent } from '../components/reports/reports.component';
import { ReportsAddComponent } from '../components/reports-add/reports-add.component';

import { AuthGuard } from './auth.guard';

const router: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reports', canActivate: [AuthGuard],
    children: [
      { path: 'add', component: ReportsAddComponent, canActivate: [AuthGuard] },
      { path: '', component: ReportsComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '',   redirectTo: '/reports', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
