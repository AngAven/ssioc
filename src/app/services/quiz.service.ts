import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../enviroments/enviroment";

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

  getFormatQuiz(user: string, role: string){

  }
}
