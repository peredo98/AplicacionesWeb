import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { EncuestasAdminComponent } from './encuestas-admin/encuestas-admin.component';
import { ListaEncuestasAdminComponent } from './lista-encuestas-admin/lista-encuestas-admin.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CrearEncuestasComponent } from './crear-encuestas/crear-encuestas.component';
import { HomeComponent } from 'src/app/modules/shared/home/home.component';
import { AboutComponent } from 'src/app/modules/shared/about/about.component';
import { PoliciesComponent } from '../shared/policies/policies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {section : 'admin'}},
  { path: 'about', component: AboutComponent, data: {section : 'admin'}},
  { path: 'policies', component: PoliciesComponent, data: {section : 'admin'}},
  { path: 'crearEncuestas', component: CrearEncuestasComponent},
  { path: 'estadisticas', component: EstadisticasAdminComponent},
  { path: 'listaEncuestas', component: ListaEncuestasAdminComponent},
  { path: '**', component: PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }


                             
