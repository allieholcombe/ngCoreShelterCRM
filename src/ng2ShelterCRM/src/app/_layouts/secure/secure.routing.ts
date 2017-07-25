import { Routes, RouterModule } from '@angular/router';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: './pets/pets.module.ts#PetsModule'
  }
]