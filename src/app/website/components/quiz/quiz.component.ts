import {Component, OnInit} from '@angular/core';

import {StoreService} from "../../../services/store.service";
import {QuizService} from "../../../services/quiz.service";
import {UserDTO} from "../../../models/auth.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizNumber: number = 0
  quizPeriod: string = ''
  quizResponse: any = {}
  userData: UserDTO = {}

  // replace
  titulo: string = ''
  preguntas: any = ''

  constructor(
    private storeService: StoreService,
    private quizService: QuizService
  ) {
  }

  ngOnInit() {
    this.storeService.myQuizType$.subscribe(data => {
      if (data.quiz_number && data.period) {
        this.quizNumber = data.quiz_number
        this.quizPeriod = data.period
      }
    })

    this.storeService.user$.subscribe(userDTO => {
      this.userData = userDTO
    })

    this.quizService.getQuiz(`formato${this.quizNumber}`, this.quizPeriod)
      .subscribe(data => {
        this.quizResponse = data

        let quizName = ''
        if(this.quizPeriod !== ''){
          switch (this.quizPeriod) {
            case 'Enero':
              quizName = `formato${this.quizNumber}a`
              break
            case 'Marzo':
              quizName = `formato${this.quizNumber}b`
              break
            default:
              alert('no se encontro un formato')
          }
        }

        //replace
        this.titulo = this.quizResponse?.nombreFormato
        this.preguntas = this.quizResponse[quizName]
      })
  }
}
