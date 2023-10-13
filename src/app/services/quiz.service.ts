import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from "../../enviroments/enviroment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getQuiz(quizName: string, quizPeriod?: string) {
    let url = `${this.apiUrl}/views/dist/assets/json/${quizName}.json`
    if(quizPeriod !== ''){
      switch (quizPeriod) {
        case 'Enero':
          url = url =`${this.apiUrl}/views/dist/assets/json/${quizName}a.json`
          break
        case 'Marzo':
          url = url =`${this.apiUrl}/views/dist/assets/json/${quizName}b.json`
          break
        default:
          alert('no se encontro un formato')
      }
    }
    return this.http.get(url)
  }

  getQuizType(username: string, roleId: string) {
    const url = `${this.apiUrl}/views/consultaFormato?nombreUsuario=${username}&idRol=${roleId}`

    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')

    let params = new HttpParams()
    params.set('nombreUsuario', username)
    params.set('idRol', roleId)

    return this.http.get(url, {headers})
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
}
