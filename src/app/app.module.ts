import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';



// AngularFire Import
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsPipe } from './components/clients/clients.pipe';
import { PhonePipe } from './components/clients/phone.pipe';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddedClientComponent } from './components/added-client/added-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
// Service Imports
import { ClientService } from './services/client.service';


const  appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'app-clients-details', component: ClientsDetailsComponent }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAh-YuXpja63m6dYv7GHQRy3jGEuo-Ycuc',
    authDomain: 'clientpanel-eba7e.firebaseapp.com',
    databaseURL: 'https://clientpanel-eba7e.firebaseio.com',
    storageBucket: 'clientpanel-eba7e.appspot.com',
    messagingSenderId: '425990602511'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientsDetailsComponent,
    AddClientComponent,
    AddedClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ClientsPipe,
    PhonePipe

  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
