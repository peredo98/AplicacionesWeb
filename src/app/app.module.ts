import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PoliciesComponent } from './policies/policies.component';
import { SignupComponent } from './signup/signup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PoliciesComponent,
    SignupComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderNavbarComponent,
    PageNotFoundComponent,
    HomeCarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdministradorModule,
    UsuarioModule
  ],
  //exports : [
    //Componentes a reutilizar (about,etc)
  //],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
