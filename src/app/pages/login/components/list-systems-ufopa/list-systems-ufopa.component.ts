import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-systems-ufopa',
  templateUrl: './list-systems-ufopa.component.html',
  styleUrls: ['./list-systems-ufopa.component.scss']
})
export class ListSystemsUfopaComponent implements OnInit {
  
  system!:string;
  type!:string;
 
  @Input()
  set nameSystem(value:string){
    this.system = value;
  }

  @Input()
  set typeSystem(value:string){
    this.type = value;
  }
  ngOnInit(){
      
  }
}
