import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { AboutComponent } from 'src/app/about/about.component';
import { PoliciesComponent } from 'src/app/policies/policies.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'policies', component: PoliciesComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'estadisticas', component: EstadisticasUsuarioComponent},
  { path: 'listaEncuestas', component: ListaEncuestasUsuarioComponent},
  { path: 'contestarEncuesta', component: ContestarEncuestaComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

                             
