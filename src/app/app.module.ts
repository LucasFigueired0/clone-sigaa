import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ListSystemsUfopaComponent } from './pages/login/components/list-systems-ufopa/list-systems-ufopa.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { RegisterOptionsComponent } from './pages/login/components/register-options/register-options.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    HeaderComponent,
    ListSystemsUfopaComponent,
    FooterComponent,    
    LoginFormComponent,
    RegisterOptionsComponent,
    StudentRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
