import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/modules/shared/home/home.component';
import { AboutComponent } from 'src/app/modules/shared/about/about.component';
import { PoliciesComponent } from '../shared/policies/policies.component';



const routes: Routes = [
  { path: '', component: HomeComponent, data: {section : 'usuario'}},
  { path: 'about', component: AboutComponent, data: {section : 'usuario'}},
  { path: 'policies', component: PoliciesComponent, data: {section : 'usuario'}},
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

                             
