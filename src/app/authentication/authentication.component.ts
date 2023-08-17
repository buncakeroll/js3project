import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Chris added Aug 13
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  email: string;
  password: string;

  public auth: AngularFireAuth;

  constructor(auth: AngularFireAuth) {
    this.auth = auth;
  }

  public signUp() {
    this.auth
      .createUserWithEmailAndPassword(this.email, this.password)

      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
}
