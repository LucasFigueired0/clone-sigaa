import { Injectable } from '@angular/core';
import { Register } from '../models/registerType';

@Injectable({
  providedIn: 'root'
})
export class RegistrationOptionsListService {
  private register!:Register[];

  getRegister(){
    this.register = [
      {
        title:"Professor ou Funcionário",
        description:"caso ainda não possua cadastro no SIGAA, clique no link abaixo.",
        imgLink:"https://sigaa.ufopa.edu.br/sigaa/img/novo_usuario.gif",
        pageLink:"#"
      },
      {
        title:"Aluno",
        description:"caso ainda não possua cadastro no SIGAA, clique no link abaixo.",
        imgLink:"https://sigaa.ufopa.edu.br/sigaa/img/user.png",
        pageLink:"/student-register"
      },
      {
        title:"Familiares",
        description:"caso ainda não possua cadastro no SIGAA, clique no link abaixo.",
        imgLink:"https://sigaa.ufopa.edu.br/sigaa/img/familiares.png",
        pageLink:"#"
      },
    ]

    return this.register;
  }


  constructor() { }
}
