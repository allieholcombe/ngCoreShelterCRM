import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routing';

//Services
import { PetsDataAccess } from './services/pets/pets.data.service';
import { PetsTransform} from './services/pets/pets.transform.service';

//Components
import { AppComponent } from './app.component';
import { LogInComponent } from './common/log-in/log-in.component';
import { SplashComponent } from './splash/splash.component';
import { PetListComponent } from './animals/petlist/petlist.component';
import { AddPetComponent } from './animals/add-pet/add-pet.component';
import { DeletePetComponent } from './animals/delete-pet/delete-pet.component';
import { PetTileComponent } from './animals/pet-tile/pet-tile.component';
import { PetDetailComponent } from './animals/pet-detail/pet-detail.component';
import { UpdatePetComponent } from './animals/update-pet/update-pet.component';
import { RegisterUserComponent } from './common/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SplashComponent,
    PetListComponent,
    AddPetComponent,
    DeletePetComponent,
    PetTileComponent,
    PetDetailComponent,
    UpdatePetComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [PetsDataAccess,
              PetsTransform],
  bootstrap: [AppComponent]
})
export class AppModule { }
