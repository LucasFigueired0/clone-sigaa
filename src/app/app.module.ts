import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { LoginValidate } from './features/validators/loginValidate';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ListSystemsUfopaComponent } from './pages/login/components/list-systems-ufopa/list-systems-ufopa.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { RegisterOptionsComponent } from './pages/login/components/register-options/register-options.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { TitleFormsComponent } from './components/title-forms/title-forms.component';

import { RegisterValidate } from './features/validators/registerValidate';
import { HomeComponent } from './pages/home/home.component';
import { HomeBarComponent } from './pages/home/components/home-bar/home-bar.component';
import { HomeNewsComponent } from './pages/home/components/home-news/home-news.component';
import { CoursesListComponent } from './pages/home/components/courses-list/courses-list.component';
import { InstitutionalDataComponent } from './pages/home/components/institutional-data/institutional-data.component';

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
    StudentRegisterComponent,
    TitleFormsComponent,
    HomeComponent,
    HomeBarComponent,
    HomeNewsComponent,
    CoursesListComponent,
    InstitutionalDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginValidate,RegisterValidate],
  bootstrap: [AppComponent],
})
export class AppModule { }
