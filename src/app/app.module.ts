import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingModule } from './LangingPage/landing.module';
import { HomePageModule } from './HomeScreen/home-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    LandingModule,
    HomePageModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
