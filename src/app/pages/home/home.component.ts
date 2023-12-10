import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/services/users.service';
import { IsLoginValid } from 'src/app/features/models/isLoginValidType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  iduser!: number | undefined;
  isValidUser!: boolean | undefined;
  nameUser!:string|undefined;
  userData?:IsLoginValid;
  lastNameUser?:string|undefined;
  
  constructor(private user: UsersService) { }
  
  ngOnInit() {
    this.isValidUser = this.user.isValidLogin().isLoggedIn
    this.iduser = this.user.isValidLogin().id
    this.userData = this.user.isValidLogin();
    this.lastNameUser = this.user.isValidLogin().last_name
    this.nameUser = this.user.isValidLogin().name
  }
  
}
