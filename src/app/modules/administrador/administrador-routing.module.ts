import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PoliciesComponent } from 'src/app/policies/policies.component';
import { AboutComponent } from 'src/app/about/about.component';
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { EncuestasAdminComponent } from './encuestas-admin/encuestas-admin.component';
import { ListaEncuestasAdminComponent } from './lista-encuestas-admin/lista-encuestas-admin.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { CrearEncuestasComponent } from './crear-encuestas/crear-encuestas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'policies', component: PoliciesComponent},
  { path: 'crearEncuestas', component: CrearEncuestasComponent},
  { path: 'estadisticas', component: EstadisticasAdminComponent},
  { path: 'listaEncuestas', component: ListaEncuestasAdminComponent},
  { path: '**', component: PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }


                             
