import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from "../../enviroments/enviroment";
import {FormDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class GoogleAppScriptService {
  baseURL = environment.API_GOOGLE_SCRIPTS_FORMATO_1A_MARZO

  constructor(
    private http: HttpClient
  ) { }

  newRecord(params: string){
    const info = encodeURI(params + '&estado=Oficinas centrales&junta=0&usuario=angel.avendano&correo=angel.avendano@ine.mx')
    const url = this.baseURL + 'AKfycbwgbbotngaABixIjq6izvHNwbNJxx2ZW89DWqMlyjoSVAs_tAPgsR6o9n7iv5I7kacnlQ/exec' + '?' + info

    return this.http.get(url)
  }
}
