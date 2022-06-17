import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'feeds',
        loadComponent: () => import('./feeds/feeds.component').then(m => m.FeedsComponent),
      },
      {
        path: 'jobs',
        loadComponent: () => import('./jobs/jobs.component').then(m => m.JobsComponent),
      },
      {
        path: 'messages',
        loadComponent: () => import('./messages/messages.component').then(m => m.MessagesComponent),
      }
    ]
  }
];
      