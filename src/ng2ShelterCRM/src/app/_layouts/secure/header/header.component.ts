import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../_services/auth.service';
import { UsersRepository } from './../../../users/_services/user.repository.service';
import { User } from './../../../users/_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  public isCollapsed;
  private _user;

  constructor(
    private _auth: AuthService,
    private _repo: UsersRepository
  ) { }

  ngOnInit() {
    this._repo.getCurrentUser()
      .subscribe(data => this._user = data);
  }

  logOut() {
    this._auth.logOut();
  }

}
