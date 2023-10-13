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

  getUserQuizzes(user: string, role: string) {
    // const url = this.url + "/SSIOC-presentacion-1.0.0/views/consultaFormato?nombreUsuario=" + user + "&idRol=" + role;
    // const headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
    // let options = new RequestOptions({headers: headers});
    // return this.http.get(``, options)
    //   .map(res => {
    //     if (res.json() !== undefined) {
    //       return res.json();
    //     } else {
    //       console.log(res);
    //       return {'mensajeError': res.status};
    //     }
    //   });
  }

  getMyQuizType(username: string, roleId: string) {
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
