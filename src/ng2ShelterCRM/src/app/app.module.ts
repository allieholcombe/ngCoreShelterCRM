import { NgModule } from '@angular/core';
import { PetsModule } from './pets/pets.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';


import { AppRouting } from './app.routing';
import { environment } from '../environments/environment';

//Services
import { Guard } from './_services/guard.service';
import { AuthService } from './_services/auth.service';

//Components
import { AppComponent } from './app.component';
import { SplashComponent } from './_components/splash/splash.component';
import { LogInComponent } from './_components/log-in/log-in.component';
import { RegisterUserComponent } from './_components/register-user/register-user.component';
import { PublicComponent } from './_layouts/public/public.component';
import { SecureComponent } from './_layouts/secure/secure.component';
import { HeaderComponent } from './_layouts/secure/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LogInComponent,
    RegisterUserComponent,
    PublicComponent,
    SecureComponent,
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    PetsModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
  ],
  providers: [
    AuthService,
    Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
