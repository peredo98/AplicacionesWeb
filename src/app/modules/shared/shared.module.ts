import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { PoliciesComponent } from './policies/policies.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AboutComponent,
    FooterComponent,
    HomeComponent,
    HomeCarouselComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    PoliciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    AboutComponent,
    HomeComponent,
    HomeCarouselComponent,
    FooterComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    PoliciesComponent,
  ],
})
export class SharedModule { }
