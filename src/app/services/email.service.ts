import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from "../../enviroments/enviroment";

import {EmailQuizDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.API_URL_MAIL

  constructor(
      private http: HttpClient
  ) { }

  sendMail(dto: EmailQuizDTO){
    return this.http.post<EmailQuizDTO>(this.apiUrl, dto)
  }
}
