//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//angularfire
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { authRouting } from './auth.routing';
import { environment } from '../../environments/environment';

//components
import { RegisterUserComponent } from './register-user/register-user.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [
    RegisterUserComponent,
    LogInComponent,
  ]
})
export class AuthModule { }
