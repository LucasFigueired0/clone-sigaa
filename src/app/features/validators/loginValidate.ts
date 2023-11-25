import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/features/services/users.service';
import { Users } from 'src/app/features/models/users';
import { Observable, Observer } from 'rxjs';

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
    ) { }

    loginConfirm(username: string, password: string): Observable<Boolean> {
        return new Observable((observer: Observer<boolean>) => {
            this.usersService.getUserLogin(username, password).subscribe({
                next: (user: Users[]) => {
                    try {
                        if(user[0]!==undefined){
                            this.userDataName = user[0];
                            observer.next(true);
                            observer.complete();
                        }else{
                            this.userDataName = user[0];
                            observer.next(false);
                            observer.complete();
                        }
                    } catch {
                        observer.next(false);
                        observer.complete();
                    }
                }, error: (error) => {
                    console.error('Erro ao obter usuário: ', error)
                    observer.next(false);
                    observer.complete();
                }

            });

        });
    }

}
