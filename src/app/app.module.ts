import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Need to be in "imports:[]" below?
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Need to be in "imports:[]" below?
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Need to be in "imports:[]" below?
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent,
    AuthenticationComponent,
    HeaderComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [], // Here we declare all the services or pipes. Declare AngularFireAuth and AngularFireDatabase??
  bootstrap: [AppComponent],
})
export class AppModule {}
// All Angular projects have at least one module known as AppModule.
// used for bootstrapping our project to launch the application
