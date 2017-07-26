import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

//Components

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
  ],
  providers: [
    UsersRepository,
    UserDataAccess,
    UserTransform
  ]
})
export class UsersModule { }