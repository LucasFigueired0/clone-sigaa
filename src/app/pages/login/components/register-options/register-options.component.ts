import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-options',
  templateUrl: './register-options.component.html',
  styleUrls: ['./register-options.component.scss']
})
export class RegisterOptionsComponent {
  title!:string;
  description!:string;
  linkImg!:string;
  linkPage!:string;

  @Input()
  set titleRegister(value:string){
    this.title = value;
  }

  @Input()
  set descriptionRegister(value:string){
    this.description = value;
  }

  @Input() 
  set linkImgRegister(value:string){
    this.linkImg = value;
  }


  @Input()
  set linkPageRegister(value:string){
    this.linkPage = value;
  }
}
