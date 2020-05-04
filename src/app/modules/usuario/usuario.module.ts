import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule} from './usuario-routing.module';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { ContestarPreguntaComponent } from './contestar-pregunta/contestar-pregunta.component';
import { EncuestasUsuarioComponent } from './encuestas-usuario/encuestas-usuario.component';
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';
import { FechasUsuarioComponent } from './fechas-usuario/fechas-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { GraficasUsuarioComponent } from './graficas-usuario/graficas-usuario.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [ContestarEncuestaComponent,
                ContestarPreguntaComponent,
                EncuestasUsuarioComponent,
                EstadisticasUsuarioComponent,
                FechasUsuarioComponent,
                FooterComponent,
                GraficasUsuarioComponent,
                HeaderComponent,
                HeaderNavbarComponent,
                HomeComponent,
                HomeCarouselComponent,
                ListaEncuestasUsuarioComponent
                ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
