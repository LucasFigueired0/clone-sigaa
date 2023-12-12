import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Users } from '../models/users';
import { IsLoginValid } from '../models/isLoginValidType';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3001/users/';
  name!: string;
  data!: Users;
  dataUser!: IsLoginValid;


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  getUserLogin(username: string, password: string): Observable<Users> {
    return this.httpClient.post<Users>(this.url + "sign-in", JSON.stringify({
      "username": username,
      "password": password
    }), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getUserById(): Observable<Users> {
    return this.httpClient.post<Users>(this.url + "get-data-user", JSON.stringify({
      id:"11"
    }), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  setUser(users: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.url + "sign-up", JSON.stringify(
      {
        "name": users.name,
        "last_name": users.last_name,
        "email": users.email,
        "username": users.username,
        "registration_number": users.registration_number,
        "cpf": users.cpf,
        "rg": users.rg,
        "date_of_birth": users.date_of_birth,
        "undergraduate_degree": users.undergraduate_degree,
        "initial_semester": users.semester,
        "level": users.level,
        "password": users.password,
      }
    ), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  dataValidLogin(user: IsLoginValid) {
    if (user.isLoggedIn === true) {
      this.dataUser = {
        isLoggedIn: user.isLoggedIn,
        id: user.id,
      }
      return this.dataUser
    } else {
      return {
        isLoggedIn: user.isLoggedIn,
      }
    }
  }

  isValidLogin(): IsLoginValid {
    const dataLogin = localStorage.getItem("loggedInUser")
    let data: IsLoginValid

    if (dataLogin !== null) {
      data = JSON.parse(dataLogin) as IsLoginValid
      return data;
    }
    else {
      data = { isLoggedIn: false, id: undefined } as IsLoginValid
      return data;
    }
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código de erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
