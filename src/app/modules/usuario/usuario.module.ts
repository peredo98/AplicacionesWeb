import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule} from './usuario-routing.module';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { ContestarPreguntaComponent } from './contestar-pregunta/contestar-pregunta.component';
import { EncuestasUsuarioComponent } from './encuestas-usuario/encuestas-usuario.component';
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';
import { FechasUsuarioComponent } from './fechas-usuario/fechas-usuario.component';
import { GraficasUsuarioComponent } from './graficas-usuario/graficas-usuario.component';
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { GraficasUsuario2Component } from './graficas-usuario2/graficas-usuario2.component';
import { GraficasUsuario3Component } from './graficas-usuario3/graficas-usuario3.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ContestarEncuestaComponent,
                ContestarPreguntaComponent,
                EncuestasUsuarioComponent,
                EstadisticasUsuarioComponent,
                FechasUsuarioComponent,
                GraficasUsuarioComponent,
                ListaEncuestasUsuarioComponent,
                GraficasUsuario2Component,
                GraficasUsuario3Component
                ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
