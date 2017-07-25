import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { PetListComponent } from './petlist/petlist.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { Guard } from './../_services/guard.service';

const petsRoutes: Routes = [
  {
    path: 'pets',
    children: [
      {
        path: '',
        component: PetListComponent,
        canActivate: [Guard]
      },
      {
        path: ':id',
        component: PetDetailComponent,
        canActivate: [Guard]
      },
      {
        path: ':id/update',
        component: UpdatePetComponent,
        canActivate: [Guard]
      }
    ]
  },

]

export const PetsRouting: ModuleWithProviders = RouterModule.forChild(petsRoutes);