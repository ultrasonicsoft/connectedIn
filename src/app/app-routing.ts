import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dasbhoard',
    loadChildren: () => import('./dashboard/dashboard-routing').then(m => m.DashboardRoutes),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

