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
        @Inject(UserTransform) private _transform: UserTransform
    ) { }

    getCurrentUser() {
        let currentUser = this._dataAccess.getCurrentUser();
            // .map(data => this._transform.createUser(data))
            // .subscribe(data => console.log(data));
        return currentUser;
    }

    updateUser() {
        
    }
}