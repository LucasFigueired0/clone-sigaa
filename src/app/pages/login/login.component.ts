import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  systemsUfopa = [
    {
      id:"1",
      systemName:"SIGAA",
      type:"(Acadêmico)"
    },
    {
      id:"2",
      systemName:"SIPAC",
      type:"(Administrativo)"
    },
    {
      id:"3",
      systemName:"SIGRH",
      type:"(Recursos Humanos)"
    },
    {
      id:"4",
      systemName:"SIGED",
      type:"(Gestão eletrônica de documentos)"
    },
    {
      id:"5",
      systemName:"SIGEleição",
      type:"(Controle de processos eleitorais)"
    },
    {
      id:"6",
      systemName:"SIGEventos",
      type:"(Gestão de eventos)"
    },
    {
      id:"7",
      systemName:"SIGAdmin",
      type:"(Administração e comunicação)"
    },
    {
      id:"8",
      systemName:"SAAD",
      type:"(Acompanhamento de atividades docentes)"
    },
  ]

}
