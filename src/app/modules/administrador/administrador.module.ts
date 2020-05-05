import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdministradorRoutingModule} from './administrador-routing.module';
import { CrearEncuestasComponent } from './crear-encuestas/crear-encuestas.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { EncuestasAdminComponent } from './encuestas-admin/encuestas-admin.component';
import { EstadisticasAdminComponent } from './estadisticas-admin/estadisticas-admin.component';
import { FechasAdminComponent } from './fechas-admin/fechas-admin.component';
import { FooterComponent } from './footer/footer.component';
import { GraficasAdminComponent } from './graficas-admin/graficas-admin.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { ListaEncuestasAdminComponent } from './lista-encuestas-admin/lista-encuestas-admin.component';
import { HomeComponent } from './home/home.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { AboutComponent } from './about/about.component';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  declarations: [AboutComponent,
                PoliciesComponent,
                CrearEncuestasComponent, 
                CrearPreguntaComponent, 
                EncuestasAdminComponent, 
                EstadisticasAdminComponent, 
                FechasAdminComponent, 
                FooterComponent, 
                GraficasAdminComponent, 
                HeaderComponent, 
                HeaderNavbarComponent, 
                HomeComponent,
                HomeCarouselComponent,
                ListaEncuestasAdminComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
  ]
})
export class AdministradorModule { }
