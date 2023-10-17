import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {throwError} from 'rxjs';
import {map, catchError, tap} from "rxjs/operators";

import {environment} from '../../enviroments/enviroment'
import {UserDTO} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/login`;

  constructor(
    private http: HttpClient
  ) {
  }

  login(user: string, password: string) {
    let headers = new HttpHeaders()
    headers = headers.set('username', user)
    headers = headers.set('password', password)

    return this.http.post<UserDTO>(this.apiUrl, '', {
      headers
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.NotImplemented) {
            return throwError('No esta implementado el servicio');
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError('El producto no existe');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError('No estas permitido');
          }
          return throwError('Ups algo salio mal');
        }),
        map(user => {
          if (user.authorities) {
            return {
              ...user,
              authority: user.authorities[0].authority,
              idRol: `consejo.${user.authorities[0].authority.split('.')[1].toLowerCase()}`
            }
          }
          return user
        }),
      )
  }
}
