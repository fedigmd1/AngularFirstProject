import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './HomeScreen/carousel/carousel.component';
import { LandingComponent } from './LangingPage/landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: "welcome", component: LandingComponent },
  {
    path: "home", component: NavbarComponent, children: [
      { path: "fedi", component: CarouselComponent, }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
