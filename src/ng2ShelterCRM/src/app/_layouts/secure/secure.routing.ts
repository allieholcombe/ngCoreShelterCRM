import { Routes, RouterModule } from '@angular/router';

export const SECURE_ROUTES: Routes = [
{
  path: 'pets',
    loadChildren: './pets/pets.module.ts#PetsModule'
}
]