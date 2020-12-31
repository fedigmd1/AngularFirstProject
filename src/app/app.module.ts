import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingModule } from './LangingPage/landing.module';
import { HomePageModule } from './HomeScreen/home-page.module';
import { MovieService } from './services/movie.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'

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
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [MovieService],

  bootstrap: [AppComponent]
})
export class AppModule { }
