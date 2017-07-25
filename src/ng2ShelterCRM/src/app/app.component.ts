import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Test Application';

    //constructor(private user: UserInfo) {
    //    this.user.checkAuthentication()
    //        .subscribe();
    //}
}