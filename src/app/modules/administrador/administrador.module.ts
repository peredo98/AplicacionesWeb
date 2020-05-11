import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdministradorRoutingModule} from './administrador-routing.module';
import { CrearEncuestasComponent } from './crear-encuestas/crear-encuestas.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { EncuestasAdminComponent } from './encuestas-admin/encuestas-admin.component';
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { FechasAdminComponent } from './fechas-admin/fechas-admin.component';
import { GraficasAdminComponent } from './graficas-admin/graficas-admin.component';
import { ListaEncuestasAdminComponent } from './lista-encuestas-admin/lista-encuestas-admin.component';
import { GraficasAdmin2Component } from './graficas-admin2/graficas-admin2.component';
import { GraficasAdmin3Component } from './graficas-admin3/graficas-admin3.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CrearEncuestasComponent, 
                CrearPreguntaComponent, 
                EncuestasAdminComponent, 
                EstadisticasAdminComponent, 
                FechasAdminComponent, 
                GraficasAdminComponent, 
                ListaEncuestasAdminComponent,
                GraficasAdmin2Component,
                GraficasAdmin3Component],
  imports: [
    CommonModule,
    SharedModule,
    AdministradorRoutingModule,
  ]
})
export class AdministradorModule { }
