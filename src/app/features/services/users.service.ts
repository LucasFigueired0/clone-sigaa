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

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/students';
  name!: string;
  data!: Users;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new Headers({
      'Content-type':'application/json'
    })
  }

  getByEmail(email:string):Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.url}?email=${email}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getByPassword(password:string):Observable<Users[]>{
    
    return this.httpClient.get<Users[]>(`${this.url}?password=${password}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
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
