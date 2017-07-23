import { NgModule } from '@angular/core';
import { PetsModule } from './pets/pets.module';
import { SharedModule } from './shared/shared.module';

import { routing } from './app.routing';
import { environment } from '../environments/environment';

//Services

//Components
import { AppComponent } from './app.component';
import { SplashComponent } from './_components/splash/splash.component';
import { LogInComponent } from './_components/log-in/log-in.component';
import { RegisterUserComponent } from './_components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LogInComponent,
    RegisterUserComponent
  ],
  imports: [
    SharedModule,
    PetsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
