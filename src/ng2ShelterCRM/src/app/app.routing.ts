import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SplashComponent } from './splash/splash.component';
import { PetListComponent } from './animals/petlist/petlist.component';
import { PetDetailComponent } from './animals/pet-detail/pet-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SplashComponent
    },
    {
        path: 'pets',
        component: PetListComponent
    },
    {
        path: 'pets/:id',
        component: PetDetailComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);