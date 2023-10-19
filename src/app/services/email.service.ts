import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from "../../enviroments/enviroment";

import {RequestEmailQuiz, SendEmailQuizDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.API_URL_MAIL

  constructor(
      private http: HttpClient
  ) { }

  sendMail(dto: SendEmailQuizDTO){
    return this.http.post<RequestEmailQuiz>(this.apiUrl, dto)
  }
}
