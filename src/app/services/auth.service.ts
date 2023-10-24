import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {throwError} from 'rxjs';
import {map, catchError, tap} from "rxjs/operators";

import {environment} from '../../enviroments/enviroment'
import {LoginAdminResponse, UserDTO} from "../models/auth.model";

import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}`;

  constructor(
    private http: HttpClient,
    private storeService: StoreService
  ) {
  }

  login(user: string, password: string) {
    let headers: HttpHeaders = new HttpHeaders()
    const url = this.apiUrl + '/login'
    headers = headers.set('username', user)
    headers = headers.set('password', password)

    return this.http.post<UserDTO>(url, '', {
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

  adminLogin(email: string, password: string) {
    const emailuser: string = email.includes('@') ? email : email + '@ine.mx'
    const url = this.apiUrl + '/views/loginAdmin'
    let headers: HttpHeaders = new HttpHeaders()

    headers = headers.set('correo', emailuser)
    headers = headers.set('contrasenia', password)

    return this.http.post<LoginAdminResponse>(url, {headers}).pipe(
      map(data => {
        if (data.codigo === 200) {
          let userData: UserDTO = {}
          userData = {
            ...data,
            Mensaje: data.mensaje,
            email: data.correo
          }
          this.storeService.storeUser(userData)
        }
        return data
      })
    )

  }
}
