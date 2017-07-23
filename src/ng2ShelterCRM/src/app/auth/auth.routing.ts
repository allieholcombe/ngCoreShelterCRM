import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LogInComponent } from './log-in/log-in.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const authRoutes: Routes = [
    {
        path: 'login',
        component: LogInComponent
    },
    {
        path: 'register',
        component: RegisterUserComponent
    },
];

export const authRouting: ModuleWithProviders = RouterModule.forRoot(authRoutes);
