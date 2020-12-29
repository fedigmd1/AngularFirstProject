import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';



import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    AlertModule,
    BrowserModule,
  ],
  exports: [
    CarouselComponent,
  ]
})
export class HomePageModule { }
