import { Component } from '@angular/core';
import { RegistrationOptionsListService } from 'src/app/features/services/registration-options-list.service';
import { SystemsListService } from 'src/app/features/services/systems-list.service';
import { Register } from 'src/app/features/models/registerType';
import { OnInit } from '@angular/core';
import { SystemTypeList } from 'src/app/features/models/systemTypeList';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private RegistrationOptions:RegistrationOptionsListService,
    private SystemList:SystemsListService){}

  
  registrationList!:Register[];
  systemList!:SystemTypeList[];

  getRegistrattionList(){
    this.registrationList = this.RegistrationOptions.getRegister();
  }

  getSystems(){
    this.systemList = this.SystemList.getSystemList();
  }
  ngOnInit(){
      this.getRegistrattionList();
      this.getSystems();
  }

}
