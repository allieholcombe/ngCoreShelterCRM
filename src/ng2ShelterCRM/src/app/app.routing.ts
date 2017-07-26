import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { PUBLIC_ROUTES } from './_layouts/public/public.routing';
import { SECURE_ROUTES } from './_layouts/secure/secure.routing';

//Components
import { SplashComponent } from './_components/splash/splash.component';
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';

//Services
import { Guard } from './_services/guard.service';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    children: SECURE_ROUTES,
    canActivate: [Guard],
  },
  {
    path: '',
    component: PublicComponent,
    data: { title: 'Public Views' },
    children: PUBLIC_ROUTES
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);