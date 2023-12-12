import { Component } from '@angular/core';
import { UsersService } from 'src/app/features/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isloggedIn!:boolean|undefined;
  constructor(private userService:UsersService,
              private router:Router){}
  ngOnInit(){
    this.isloggedIn = this.userService.isValidLogin().isLoggedIn;
  }

  clickButton(){
    localStorage.clear()
    this.router.navigate(['/login']);
  }
} 
