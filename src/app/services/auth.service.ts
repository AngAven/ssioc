import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/login`;

  constructor(
    private http: HttpClient
  ) { }

  login(user: string, password: string){
    let headers = new HttpHeaders()
    headers = headers.set('username', user)
    headers = headers.set('password', password)

    return this.http.post(this.apiUrl, '', {
      headers
    })
  }
}
