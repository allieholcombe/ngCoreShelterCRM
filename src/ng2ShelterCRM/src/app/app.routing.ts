import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SplashComponent } from './splash/splash.component';
import { PetListComponent } from './animals/petlist/petlist.component';
import { PetDetailComponent } from './animals/pet-detail/pet-detail.component';
import { UpdatePetComponent } from './animals/update-pet/update-pet.component';

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
    },
    {
        path: 'pets/:id/update',
        component: UpdatePetComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);