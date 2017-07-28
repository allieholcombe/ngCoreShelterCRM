import { Injectable } from '@angular/core';
import { User } from './../_models/user.model';

@Injectable()
export class UserTransform {
  userProperties: Array<string> = [];

  constructor() { }

  //unused experiment
  // createUserPropertyArray() {
  //   let userClass = new User();
  //   this.userProperties = [];

  //   Object.keys(userClass).forEach(function (key, index) {
  //     this.userProperties.push(key);
  //   });
  // }

  transformUser(data: any) {
    let newUser = new User();
    if (data.hasOwnProperty("email")) {
      newUser.email = data.email;
    }
    if (data.hasOwnProperty("displayName")) {
      newUser.displayName = data.displayName;
    }
    if (data.hasOwnProperty("uid")) {
      newUser.id = data.uid;
    }
    return newUser;
  }

  createUser(data: any) {
    data = this.transformUser(data);
    return data;
  }
}
