import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SplashComponent } from './splash/splash.component';
import { PetListComponent } from './pets/petlist/petlist.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SplashComponent
    },
    {
        path: 'pets',
        component: PetListComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);