import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  helpList = [
    {
      description:"Perdeu o e-mail de confirmação de cadastro?",
      linkDescription:"Clique aqui para recuperá-lo.",
      link:"https:/sigadmin.ufopa.edu.br/admin/public/recuperar_codigo.jsf"
    },
    {
      description:"Esqueceu o login",
      linkDescription:"Clique aqui para recuperá-lo.",
      link:"#"
    },
    {
      description:"Esqueceu a senha",
      linkDescription:"Clique aqui para recuperá-la.",
      link:"#"
    },
    
  ]
}
