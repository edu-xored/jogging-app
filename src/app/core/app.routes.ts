import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AuthGuard } from './auth.guard';

const router: Routes = [
  { path: 'login', component: LoginComponent }
  //TODO: for '/records' path use `canActivate: [AuthGuard]`
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
