import {Component, OnInit} from '@angular/core';
//import {AuthService} from "angular4-social-login";
//import {FacebookLoginProvider, GoogleLoginProvider} from "angular4-social-login";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user;
    loggedIn;
    constructor() {}

    ngOnInit() {
//        this.authService.authState.subscribe((user) => {
//            this.user = user;
//            console.log('coming')
//        });
    }
    signInWithGoogle(): void {
//        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    }

}
