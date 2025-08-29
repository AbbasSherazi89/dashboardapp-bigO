import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Typography } from './pages/typography';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Home },
  { path: 'typography', component: Typography },
  { path: '**', redirectTo: '/dashboard' },
];
