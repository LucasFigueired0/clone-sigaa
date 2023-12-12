import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-institutional-data',
  templateUrl: './institutional-data.component.html',
  styleUrls: ['./institutional-data.component.scss']
})
export class InstitutionalDataComponent {
  register!: string;
  undergraduate_degree!: string;
  level!: string;
  email!: string;
  initial_semester!: string;

  @Input()
  set nameRegister(value: string) {
    this.register = value;
  }

  @Input()
  set graduateRegister(value:string){
    this.undergraduate_degree = value;
  }

  @Input()
  set levelRegister(value:string){
    this.level = value;
  }
  @Input()
  set emailRegister(value:string){
    this.email = value;
  }
  @Input()
  set semesterRegister(value:string){
    this.initial_semester = value;
  }
}
