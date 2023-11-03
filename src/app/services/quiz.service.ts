import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from "rxjs/operators";

import {StoreService} from "./store.service";
import {environment} from "../../environments/environment";
import {QuizDTO, FormsAvailable} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = `${environment.API_SSIOC}`;

  constructor(
    private http: HttpClient,
    private storeService: StoreService
  ) {
  }

  getQuizDelete(quizName: string, quizPeriod?: string) {
    let url = `${this.apiUrl}/views/dist/assets/json/${quizName}.json`
    if (quizPeriod !== '') {
      switch (quizPeriod) {
        case 'Enero':
          url = url = `${this.apiUrl}/views/dist/assets/json/${quizName}a.json`
          break
        case 'Marzo':
          url = url = `${this.apiUrl}/views/dist/assets/json/${quizName}b.json`
          break
        default:
          alert('no se encontro un formato')
      }
    }
    return this.http.get(url)
  }

  getQuizType(username: string, roleId: string) {
    const url = `${this.apiUrl}/views/consultaFormato`
    let params = new HttpParams()

    params = params.set('nombreUsuario', username)
    params = params.set('idRol', roleId)

    return this.http.get(url, {params})
      .pipe(
        map(request => {
          const requestArray: any = request
          if (requestArray.length > 0) {
            const dataObject = requestArray[0]
            return {
              ...dataObject,
              quiz_number: parseInt(dataObject.nombreArchivo.split('|')[0].slice(-1)),
              period: dataObject.nombreArchivo.split('|')[1]
            }
          }
        })
      )
  }

  getAvailableForms() {
    const url = `${this.apiUrl}/views/obtieneFormatosVigentes`
    return this.http.get<FormsAvailable[]>(url)
  }

  getQuizByForm(idFormato: number, idPeriodo: number) {
    const url = `${this.apiUrl}/views/obtienePreguntasxFormato`
    let params = new HttpParams()

    params = params.set('idFormato', idFormato)
    params = params.set('idPeriodo', idPeriodo)

    return this.http.get<QuizDTO>(url, {params})
  }
}
