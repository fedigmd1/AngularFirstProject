import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MoviecardsComponent } from './moviecards/moviecards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    CarouselComponent,
    MoviecardsComponent,
  ],
  imports: [
    CommonModule,
    AlertModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  exports: [
    CarouselComponent,
    MoviecardsComponent,
  ]
})
export class HomePageModule { }
