import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/services/users.service';
import { Users } from 'src/app/features/models/users';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent{
  helpList = [
    {
      description: "Perdeu o e-mail de confirmação de cadastro?",
      linkDescription: "Clique aqui para recuperá-lo.",
      link: "https:/sigadmin.ufopa.edu.br/admin/public/recuperar_codigo.jsf"
    },
    {
      description: "Esqueceu o login",
      linkDescription: "Clique aqui para recuperá-lo.",
      link: "#"
    },
    {
      description: "Esqueceu a senha",
      linkDescription: "Clique aqui para recuperá-la.",
      link: "#"
    },
  ]

  usernameView!: string;
  passwordView!: string;

  username!:string;
  password!:string;

  aluno!: Users;
  user = {} as Users;
  users!: Users[];
  userDataName!: Users;
  userDataPassword!:Users;
  

  id!:number;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // this.getUserName
  }

  getUserName() {
    this.usersService.getByEmail(this.usernameView).subscribe((user: Users[]) => {
      this.userDataName = user[0];
    });
    this.usersService.getByPassword(this.passwordView).subscribe((user: Users[])=>{
        this.userDataPassword = user[0];
    });
    this.handleValidate(this.userDataPassword, this.userDataName);
  }

  handleValidate(password:Users, name:Users) {
    console.log(password);
    if (password && name) {
      alert("Logado!")
      console.log("###", this.userDataName.courses);
    } else {
      console.log("###", "Usuário ou senha inválidos!");
    }
  }

  onSubmit() {
    this.getUserName();
  }
}
