import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

import {environment} from '../../enviroments/enviroment'
import {User} from "../models/auth.model";

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

    return this.http.post<User>(this.apiUrl, '', {
      headers
    })
      .pipe(
        map(user => {
          return {
            ...user,
            authority: user.authorities[0].authority,
            idRol: `consejo.${user.authorities[0].authority.split('.')[1].toLowerCase()}`
          }
        })
      )
  }
}
