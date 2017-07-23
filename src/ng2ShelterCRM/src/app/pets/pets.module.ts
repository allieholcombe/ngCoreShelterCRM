import { NgModule } from '@angular/core';
import { PetsRouting } from './pets.routing';
import { SharedModule } from './../shared/shared.module';

//Components
import { PetListComponent } from './petlist/petlist.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DeletePetComponent } from './delete-pet/delete-pet.component';
import { PetTileComponent } from './pet-tile/pet-tile.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

//Services
import { PetsDataAccess } from './_services/pets.data.service';
import { PetsTransform } from './_services/pets.transform.service';

@NgModule({
  imports: [
    SharedModule, // ngFor, ngIf directives
    PetsRouting,
  ],
  declarations: [
    PetListComponent,
    AddPetComponent,
    DeletePetComponent,
    PetTileComponent,
    PetDetailComponent,
    UpdatePetComponent
  ],
  providers: [
    PetsDataAccess,
    PetsTransform
  ]
})
export class PetsModule { }