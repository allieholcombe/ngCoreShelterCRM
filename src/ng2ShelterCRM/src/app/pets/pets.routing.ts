import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { PetListComponent } from './petlist/petlist.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

const petsRoutes: Routes = [
    {
        path: 'pets',
        children: [
            {
                path: '',
                component: PetListComponent
            },
            {
                path: ':id',
                component: PetDetailComponent
            },
            {
                path: ':id/update',
                component: UpdatePetComponent
            }
        ]
    },

]

export const PetsRouting: ModuleWithProviders = RouterModule.forChild(petsRoutes);