import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from "../../enviroments/enviroment";

import {FormDTO, FormResponseDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.API_URL_MAIL

  constructor(
      private http: HttpClient
  ) { }

  sendToUserAnsweredQuiz(dto: FormDTO){
    return this.http.post<FormResponseDTO>(this.apiUrl, dto)
  }
}
