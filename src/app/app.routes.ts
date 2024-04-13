import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoInternetComponent } from './pages/no-internet/no-internet.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (module) => module.HomeComponent
      ),
  },
  {
    path: 'no-internet',
    component: NoInternetComponent,
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component').then(
        (module) => module.NotFoundPageComponent
      ),
  },
];
