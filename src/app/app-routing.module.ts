import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';//about
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';//html
import { LoginComponent } from './login/login.component';
import { PoliciesComponent } from './policies/policies.component';
import { SignupComponent } from './signup/signup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { ListaEncuestasAdminComponent } from './lista-encuestas-admin/lista-encuestas-admin.component';//Html
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';//html
import { CrearEncuestasComponent } from './crear-encuestas/crear-encuestas.component';//html
import { EncuestasAdminComponent } from './encuestas-admin/encuestas-admin.component';
import { EncuestasUsuarioComponent } from './encuestas-usuario/encuestas-usuario.component';
import { GraficasAdminComponent } from './graficas-admin/graficas-admin.component';
import { GraficasUsuarioComponent } from './graficas-usuario/graficas-usuario.component';
import { FechasAdminComponent } from './fechas-admin/fechas-admin.component';
import { FechasUsuarioComponent } from './fechas-usuario/fechas-usuario.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { ContestarPreguntaComponent } from './contestar-pregunta/contestar-pregunta.component';
import  {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contestar-encuesta', component: ContestarEncuestaComponent},
  { path: 'policies', component: PoliciesComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin/listaEncuestas', component: ListaEncuestasAdminComponent},
  { path: 'contestarEncuesta', component: ContestarEncuestaComponent },
  { path: 'encuestasUsuario', component: EncuestasUsuarioComponent},
  { path: 'admin/encuestas', component: EncuestasAdminComponent},
  { path: 'crearEncuestas', component: CrearEncuestasComponent},
  { path: 'estadisticasUsuario', component:EstadisticasUsuarioComponent},
  { path: 'admin/estadisticas', component: EstadisticasAdminComponent},
  { path: 'listaEncuestasUsuario', component: ListaEncuestasUsuarioComponent},
  { path: '**', component: PageNotFoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [PageNotFoundComponent, 
                                ListaEncuestasUsuarioComponent, 
                                EstadisticasAdminComponent, 
                                EstadisticasUsuarioComponent, 
                                CrearEncuestasComponent, 
                                EncuestasAdminComponent, 
                                EncuestasUsuarioComponent, 
                                ContestarEncuestaComponent, 
                                ListaEncuestasAdminComponent,
                                LoginComponent, 
                                SignupComponent, 
                                PoliciesComponent, 
                                ContestarEncuestaComponent, 
                                AboutComponent, 
                                HomeComponent];


