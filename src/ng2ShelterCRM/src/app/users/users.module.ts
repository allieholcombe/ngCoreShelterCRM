import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

//Components
import { LogInComponent } from './log-in/log-in.component';
import { RegisterUserComponent } from './register-user/register-user.component';

//Services
import { UsersRepository } from './_services/user.repository.service';
import { UserDataAccess } from './_services/users.data.service';
import { UserTransform } from './_services/users.transform.service';

@NgModule({
  imports: [
    SharedModule, // ngFor, ngIf directives
    // PetsRouting,
  ],
  declarations: [
    LogInComponent,
    RegisterUserComponent
  ],
  providers: [
    UsersRepository,
    UserDataAccess,
    UserTransform
  ]
})
export class UsersModule { }