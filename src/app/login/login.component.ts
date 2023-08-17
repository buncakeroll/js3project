// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  public auth: AngularFireAuth;

  constructor(auth: AngularFireAuth) {
    this.auth = auth;
  }

  loginWithEmail() {
    this.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  // This API throws the following errors:
  // auth/invalid-email: As the name implies, this error occurs when a user provides an invalid email address.
  // auth/user-disabled: This error occurs when the registered user account is disabled in Firebase. This feature is required when the registered user is not
  // complying with the terms and conditions of the application. Then, we can show a meaningful message to the user.
  // auth/user-not-found: This error occurs when the user has not signed up in our application. In this case, we can direct the user to the signup page.
  // auth/wrong-password: This error occurs when the password is not correct. In
  // this case, the user has two options: either provide the correct password or reset the password.

  logout() {
    this.auth.signOut();
  }

  // Chris added on Aug 13, 2023
  resetPassword() {
    this.auth.sendPasswordResetEmail(this.email).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }
}
