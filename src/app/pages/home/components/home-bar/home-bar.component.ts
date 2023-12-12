import { Component } from '@angular/core';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.scss']
})
export class HomeBarComponent {
  listBar=[
    {
      description:"Ensino",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/icones/ensino_menu.gif",
    },
    {
      description:"Pesquisa",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/icones/pesquisa_menu.gif",
    },
    {
      description:"Extensão",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/icones/extensao_menu.gif",
    },
    {
      description:"Monitoria",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/icones/monitoria_menu.gif",
    },
    {
      description:"Ações associadas",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/projetos/associado_menu.png",
    },
    {
      description:"Biblioteca",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/icones/biblioteca_menu.gif",
    },
    {
      description:"Bolsas",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/bolsas.png",
    },
    {
      description:"Estágio",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/estagio/estagio_menu.png",
    },
    {
      description:"Relações internacionais",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/relacoes_internacionais/mobilidade.png",
    },
    {
      description:"Outros",
      imgUrl:"https://sigaa.ufopa.edu.br/sigaa/img/menu/outros.png",
    },
  ]
}
