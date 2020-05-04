import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { SignupComponent } from './signup/signup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { ListaEncuestasAdminComponent } from './lista-encuestas-admin/lista-encuestas-admin.component';
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';
import { CrearEncuestasComponent } from './crear-encuestas/crear-encuestas.component';
import { EncuestasAdminComponent } from './encuestas-admin/encuestas-admin.component';
import { EncuestasUsuarioComponent } from './encuestas-usuario/encuestas-usuario.component';
import { GraficasAdminComponent } from './graficas-admin/graficas-admin.component';
import { GraficasUsuarioComponent } from './graficas-usuario/graficas-usuario.component';
import { FechasAdminComponent } from './fechas-admin/fechas-admin.component';
import { FechasUsuarioComponent } from './fechas-usuario/fechas-usuario.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { ContestarPreguntaComponent } from './contestar-pregunta/contestar-pregunta.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PoliciesComponent,
    SignupComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeCarouselComponent,
    HeaderNavbarComponent,
    ListaEncuestasAdminComponent,
    ListaEncuestasUsuarioComponent,
    EstadisticasAdminComponent,
    EstadisticasUsuarioComponent,
    CrearEncuestasComponent,
    EncuestasAdminComponent,
    EncuestasUsuarioComponent,
    GraficasAdminComponent,
    GraficasUsuarioComponent,
    FechasAdminComponent,
    FechasUsuarioComponent,
    CrearPreguntaComponent,
    ContestarEncuestaComponent,
    ContestarPreguntaComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
