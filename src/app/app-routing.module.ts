import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './features/guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'cadastro-aluno',component:StudentRegisterComponent},
  {path:'discente',component:HomeComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
