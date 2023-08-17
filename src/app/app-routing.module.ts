import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import {
  AuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'home',
    component:
      HomeComponent /* canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } */,
  },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: EditComponent }, // added the :id for passing the recipe id
  { path: 'create', component: AuthenticationComponent },
  {
    path: 'add',
    component:
      AddComponent /*, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } */,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
