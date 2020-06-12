import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AdministradorModule } from './modules/administrador/administrador.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {registerLocaleData} from '@angular/common'; 
import localeMX from '@angular/common/locales/es-MX'; 
import localeUS from '@angular/common/locales/en'; 
import { SharedModule } from './modules/shared/shared.module';
import { NewsComponent } from './news/news.component';

registerLocaleData(localeMX, 'es-MX');     
registerLocaleData(localeUS, 'en');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginFormComponent,
    RegisterFormComponent,
    PageNotFoundComponent,
    NewsComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdministradorModule,
    UsuarioModule,
    HttpClientModule,
<<<<<<< HEAD
=======

>>>>>>> scss-fixed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
