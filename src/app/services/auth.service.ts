import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {pipe, throwError} from 'rxjs';
import {map, catchError, tap} from "rxjs/operators";

import {environment} from '../../environments/environment'
import {LoginAdminResponse, UserDTO} from "../models/auth.model";

import {StoreService} from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_SSIOC}`;

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
        map(data =>{
          if(Object.keys(data).length > 0){
            this.saveUserSession(data)

            return data
          }
          return data
        }),
      )
  }

  adminLogin(email: string, password: string) {
    const url = this.apiUrl + '/views/loginAdmin'
    const data = {
      nombreUsuario: email.includes('@') ? email : email + '@ine.mx',
      contrasenia: password
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<LoginAdminResponse>(url, data, httpOptions).pipe(
      map(data => {
        if (data.codigo === 200) {
          let userData: UserDTO = {}
          userData = {
            ...data,
            Mensaje: data.mensaje,
            email: data.correo
          }
          this.storeService.storeUser(userData)
          this.saveUserSession(userData)
        }
        return data
      })
    )

  }

  saveUserSession(user: UserDTO) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  endSession() {
    this.storeService.storeUser({})
    localStorage.removeItem('user')
  }
}
