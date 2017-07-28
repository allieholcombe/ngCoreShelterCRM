import { Injectable, Inject } from '@angular/core';
import 'rxjs/Rx';

//Services
import { UserDataAccess } from './users.data.service';
import { UserTransform } from './users.transform.service';

// Models
import { User } from './../_models/user.model';


@Injectable()
export class UsersRepository {
  constructor(
    @Inject(UserDataAccess) public _dataAccess: UserDataAccess,
    @Inject(UserTransform) public _transform: UserTransform
  ) { }

  getCurrentUser() {
    return this._dataAccess.getCurrentUser()
      .map(data => this._transform.createUser(data))
  }

  updateUser() {

  }
}