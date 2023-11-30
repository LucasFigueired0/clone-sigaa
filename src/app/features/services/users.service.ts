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
  url = 'http://localhost:3000/students';
  name!: string;
  data!: Users;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  getUserLogin(username:string,password:string):Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.url}?username=${username}&password=${password}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
      )
    }

  setUser(users: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.url, JSON.stringify(
      {
      "id":users.id,
      "name":users.name,
      "last_name":users.last_name,
      "username":users.username,
      "registration_number":users.registration_number,
      "level":users.level,
      "cpf":users.cpf,
      "rg":users.rg,
      "date_of_birth":users.date_of_birth,
      "initial_semester":users.initial_semester,
      "password":users.password,
      "courses":users.courses
      
    }
    ), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  isValidLogin():IsLoginValid{
    const dataLogin= localStorage.getItem("loggedInUser")
    let data: IsLoginValid

    if(dataLogin !== null){
      data = JSON.parse(dataLogin) as IsLoginValid
      return data;
    }
    else{
      data = {isLoggedIn:false, id:undefined} as IsLoginValid
      return data;
    }
  }
 
  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage=`Código de erro: ${error.status}, `+`mensagem: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
