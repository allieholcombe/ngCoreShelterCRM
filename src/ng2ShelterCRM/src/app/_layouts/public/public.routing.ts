import { Routes, RouterModule } from '@angular/router';

import { RegisterUserComponent } from './../../_components/register-user/register-user.component';
import { LogInComponent } from './../../_components/log-in/log-in.component';
import { SplashComponent } from './../../_components/splash/splash.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'splash',
    component: SplashComponent
  },
]