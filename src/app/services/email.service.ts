import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from "../../environments/environment";

import {FormDTO, FormResponseDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.API_SSIOC

  constructor(
      private http: HttpClient
  ) { }

  sendToUserAnsweredQuiz(dto: FormDTO){
    const url:string = this.apiUrl + '/views/enviaCorreo'
    return this.http.post<FormResponseDTO>(url, dto)
  }
}
