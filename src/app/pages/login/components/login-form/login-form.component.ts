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
  userTest!: Users;
  

  id!:number;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // this.getUserName
  }

  getUserName() {
    this.usersService.getByEmail(this.usernameView).subscribe((user: Users[]) => {
      this.userTest = user[0];
      this.handleUserTest();
    });
  }

  getUserName1() {
    this.handleUserTest
    this.usersService.getByEmail(this.usernameView).subscribe((user: Users[]) => {
      this.userTest = user[0];
      this.handleUserTest();
    });
  }

  // getPassword(){
  //   this.usersService.getByPassword(this.passwordView).subscribe((user: Users[]=>{

  //   }))
  // }

  handleUserTest() {
    
    this.id = this.userTest.id;

    if (this.userTest) {
      // console.log("###", this.id);
      console.log("###", this.userTest.courses);
    } else {

      console.log("###", "UserTest é nulo ou indefinido");
    }
  }

  onSubmit() {
    this.getUserName();
  }
}
