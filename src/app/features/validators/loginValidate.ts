import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/features/services/users.service';
import { Users } from 'src/app/features/models/users';
import { Observable, Observer } from 'rxjs';
import { IsLoginValid } from '../models/isLoginValidType';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class LoginValidate {

    usernameView!: string;
    passwordView!: string;

    userDataName!: Users;
    userDataPassword!: Users;

    constructor(
        private usersService: UsersService,
        private router: Router
    ) { }

    private logged(user: Users) {
        const login: IsLoginValid = {
            isLoggedIn: true,
            id: user.id,
            name:user.name +" " +user.last_name,
            email:user.email,
            registration_number:user.registration_number,
            undergraduate_degree:user.undergraduate_degree,
            initial_semester:user.initial_semester,
            level:user.level
        }
        this.usersService.dataValidLogin(login);

        localStorage.setItem("loggedInUser", JSON.stringify(login))
    }

    private notLogged() {
        const login: IsLoginValid = {
            isLoggedIn: false,
            id: undefined,
        }
        localStorage.setItem("loggedInUser", JSON.stringify(login))
    }

    loginConfirm(username: string, password: string): Observable<Boolean> {
        return new Observable((observer: Observer<boolean>) => {
            this.usersService.getUserLogin(username, password).subscribe({
                next: (user: Users) => {
                    try {
                        if (user !== undefined) {
                            this.logged(user)
                            this.userDataName = user;
                            console.log(this.userDataName)
                            this.router.navigate(['/discente'])

                            observer.next(true);
                            observer.complete();

                        } else {
                            this.notLogged()
                            this.userDataName = user[0];
                            observer.next(false);
                            observer.complete();
                        }
                    } catch {
                        this.notLogged()
                        observer.next(false);
                        observer.complete();
                    }
                }, error: (error) => {
                    this.notLogged()
                    console.error('Erro ao obter usuário: ', error)
                    observer.next(false);
                    observer.complete();
                }

            });

        });
    }

}
