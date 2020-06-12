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
import { NewsComponent } from '../shared/news/news.component';



const routes: Routes = [
{ path: '', component: HomeComponent, data: {section : 'usuario', animation:'isHome'}},
{ path: 'news', component: NewsComponent, data: {section : 'usuario', animation:'isNews'}},
{ path: 'about', component: AboutComponent, data: {section : 'usuario', animation:'isAbout'}},
{ path: 'policies', component: PoliciesComponent, data: {section : 'usuario', animation:'isPolicies'}},
{ path: 'signup', component: SignupComponent, data:{animation: 'isSignup'}},
{ path: 'login', component: LoginComponent, data:{animation: 'isLogin'}},
{ path: 'estadisticas/:id', component: EstadisticasUsuarioComponent, data:{animation: 'isEstadisticas'}},
{ path: 'listaEncuestas', component: ListaEncuestasUsuarioComponent, data:{animation: 'isListaEncuentas'}},
{ path: 'contestarEncuesta/:id', component: ContestarEncuestaComponent, data:{animation: 'isContestarEncuestas'}}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

                             
