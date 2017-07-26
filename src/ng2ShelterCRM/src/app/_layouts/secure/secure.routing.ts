import { Routes, RouterModule } from '@angular/router';
import {SecureComponent} from './secure.component';
import { PetListComponent } from './../../pets/petlist/petlist.component';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: 'app/pets/pets.module#PetsModule'
  }
  // {
  //   path: 'pets',
  //   loadChildren: './pets/pets.module.ts#PetsModule'
  // }
]
