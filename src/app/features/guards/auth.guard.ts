import {inject} from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { IsLoginValid } from '../models/isLoginValidType';


export const authGuard = () => {
    const usersService = inject(UsersService);
    const router = inject(Router);
    const isLoggedIn:IsLoginValid = usersService.isValidLogin();

    if(isLoggedIn.isLoggedIn){
      return true;
    }else{
      router.navigate(['/login']);
      return false;
    }

};
