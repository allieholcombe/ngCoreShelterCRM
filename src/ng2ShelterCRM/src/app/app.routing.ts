import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// //Routes
// import { PUBLIC_ROUTES } from './_layouts/public/public.routing';
// import { SECURE_ROUTES } from './_layouts/secure/secure.routing';

//Components
import { SplashComponent } from './_components/splash/splash.component';
import { LogInComponent } from './_components/log-in/log-in.component';
import { RegisterUserComponent } from './_components/register-user/register-user.component';
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';
import { PetListComponent } from './pets/petlist/petlist.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { UpdatePetComponent } from './pets/update-pet/update-pet.component';

//Services
import { Guard } from './_services/guard.service';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    canActivate: [ Guard ],
    children: [
      {
        path: '',
        redirectTo: 'pets',
        pathMatch: 'full'
      },
      {
        path: 'pets',
        component: PetListComponent
      },
      {
        path: 'pets/:id',
        component: PetDetailComponent
      },
      {
        path: 'pets/:id/update',
        component: UpdatePetComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: SplashComponent
      }
    ]
  },
  {
    path: 'login',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: LogInComponent
      }
    ]
  },
  {
    path: 'register',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: RegisterUserComponent
      }
    ]
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);