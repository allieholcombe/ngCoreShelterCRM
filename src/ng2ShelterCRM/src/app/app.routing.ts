import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SplashComponent } from './_components/splash/splash.component';
import { RegisterUserComponent } from './_components/register-user/register-user.component';
import { LogInComponent } from './_components/log-in/log-in.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SplashComponent
    },
    {
        path: 'register',
        component: RegisterUserComponent
    },
    {
        path: 'login',
        component: LogInComponent
    },
    {
        path: 'pets',
        loadChildren: './pets/pet.module.ts#PetsModule'
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);