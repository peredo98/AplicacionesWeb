import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './modules/shared/home/home.component';
import { AboutComponent } from './modules/shared/about/about.component';
import { PoliciesComponent } from './modules/shared/policies/policies.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { from } from 'rxjs';
import { PerfilComponent } from './modules/shared/perfil/perfil.component';
import { NewsComponent } from './modules/shared/news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data:{animation:'isHome'}},
  { path: 'about', component: AboutComponent, data:{ animation: 'isAbout'} },
  { path: 'policies', component: PoliciesComponent, data:{animation: 'isPolicies'}},
  { path: 'login', component: LoginComponent, data:{animation: 'isLogin'}},
  { path: 'signup', component: SignupComponent, data:{animation: 'isSignup'}},
  { path: 'news', component: NewsComponent, },
  { path:'usuario',loadChildren:'./modules/usuario/usuario.module#UsuarioModule'},
  { path:'admin',loadChildren:'./modules/administrador/administrador.module#AdministradorModule'},
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard],
  },
  { path: '**',component:PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

                             
