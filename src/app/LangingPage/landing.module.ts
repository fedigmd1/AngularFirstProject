import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserModule } from '@angular/platform-browser';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }
