import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/services/users.service';
import { IsLoginValid } from 'src/app/features/models/isLoginValidType';
import { Users } from 'src/app/features/models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  iduser!: number | undefined;
  isValidUser!: boolean | undefined;
  nameUser!: string | undefined;
  userData?: IsLoginValid;
  lastNameUser?: string | undefined;

  userByIddata?:Users;

  register!: string | undefined;
  undergraduate_degree!: string | undefined;
  level!: string | undefined;
  email!: string | undefined;
  initial_semester!: string | undefined;

  constructor(private user: UsersService) { }

  ngOnInit() {
    this.isValidUser = this.user.isValidLogin().isLoggedIn
    
    this.userData = this.user.isValidLogin();
    this.lastNameUser = this.user.isValidLogin().last_name
    
    this.userById();
    
  }

  userById():void{
    this.user.getUserById().subscribe(
      (user:Users) => {
        this.userByIddata = user;

        this.iduser = this.userByIddata.id
        this.nameUser = this.userByIddata.name +' '+ this.userByIddata.last_name
        this.register = this.userByIddata.registration_number;
        this.undergraduate_degree = this.userByIddata.undergraduate_degree;
        this.level = this.userByIddata.level;
        this.email = this.userByIddata.email;
        this.initial_semester = this.userByIddata.initial_semester;
    
      },
      (error) => {
        console.error('Erro ao obter usuário: ',error)
      }
    )
  }

}
