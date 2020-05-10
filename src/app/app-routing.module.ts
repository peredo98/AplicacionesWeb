
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PoliciesComponent } from './policies/policies.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'policies', component: PoliciesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {path:'usuario',loadChildren:'./modules/usuario/usuario.module#UsuarioModule'},
  {path:'admin',loadChildren:'./modules/administrador/administrador.module#AdministradorModule'},
  {path: '**',component:PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

                             
