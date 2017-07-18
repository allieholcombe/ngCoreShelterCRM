import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { LogInComponent } from './common/log-in/log-in.component';
import { SplashComponent } from './splash/splash.component';
import { PetListComponent } from './animals/petlist/petlist.component';

//Services
import { PetsDataAccess } from './services/pets/pets.data.service';
import { PetsTransform} from './services/pets/pets.transform.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SplashComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [PetsDataAccess,
              PetsTransform],
  bootstrap: [AppComponent]
})
export class AppModule { }
