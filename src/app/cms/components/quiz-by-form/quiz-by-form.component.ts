import {Component, OnInit} from '@angular/core';

import {StoreService} from "../../../services/store.service";
import {QuizService} from "../../../services/quiz.service";

import {Question, QuizDTO} from "../../../models/quiz.model";

@Component({
  selector: 'app-quiz-by-form',
  templateUrl: './quiz-by-form.component.html',
  styleUrls: ['./quiz-by-form.component.scss']
})
export class QuizByFormComponent implements OnInit {
  quiz: QuizDTO = {}
  questions: Question[] | [] = []
  idFormato: number = 16
  idPeriodo: number = 55

  constructor(
    private storeService: StoreService,
    private quizService: QuizService,
  ) {}

  ngOnInit() {
    this.quizService.getQuizByForm(this.idFormato, this.idPeriodo).subscribe(data => {
      this.storeService.storeQuizByForm(data)
      this.questions = data?.preguntas ? data.preguntas : []
      this.quiz = data
    })
  }
}
