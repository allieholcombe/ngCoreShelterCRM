import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { PUBLIC_ROUTES } from './_layouts/public/public.routing';
import { SECURE_ROUTES } from './_layouts/secure/secure.routing';

//Components
import { SplashComponent } from './_components/splash/splash.component';
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '',
    component: SecureComponent,
    children: SECURE_ROUTES
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);