import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-forms',
  templateUrl: './title-forms.component.html',
  styleUrls: ['./title-forms.component.scss']
})
export class TitleFormsComponent {
  title!:string;
  
  @Input()
  set titleForm(value:string){
    this.title = value;
  }
} 
