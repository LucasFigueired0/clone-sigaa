import { Injectable } from '@angular/core';
import { HelpList } from '../models/helpListType';
@Injectable({
  providedIn: 'root'
})
export class HelpListService {

  private list!:HelpList[];

  getHelpList(){
    this.list = [
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

    return this.list;
  }

  constructor() { }
}
 