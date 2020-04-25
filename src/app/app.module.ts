import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { SignupComponent } from './signup/signup.component';
import { VotarComponent } from './votar/votar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FiltroCandidatosComponent } from './filtro-candidatos/filtro-candidatos.component';
import { ContainerCandidatosComponent } from './container-candidatos/container-candidatos.component';
import { CandidatoPropuestasComponent } from './candidato-propuestas/candidato-propuestas.component';
import { FiltroPropuestasComponent } from './filtro-propuestas/filtro-propuestas.component';
import { PropuestasCandidatoComponent } from './propuestas-candidato/propuestas-candidato.component';
import { FiltroEstadisticasComponent } from './filtro-estadisticas/filtro-estadisticas.component';
import { EstadisticasGraficasComponent } from './estadisticas-graficas/estadisticas-graficas.component';
import { VotarBoletaComponent } from './votar-boleta/votar-boleta.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CandidatosComponent,
    EstadisticasComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PoliciesComponent,
    PropuestasComponent,
    SignupComponent,
    VotarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeCarouselComponent,
    FiltroCandidatosComponent,
    ContainerCandidatosComponent,
    CandidatoPropuestasComponent,
    FiltroPropuestasComponent,
    PropuestasCandidatoComponent,
    FiltroEstadisticasComponent,
    EstadisticasGraficasComponent,
    VotarBoletaComponent,
    HeaderNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
