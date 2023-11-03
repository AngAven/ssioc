import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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
  idFormato: number = 0
  idPeriodo: number = 0

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private quizService: QuizService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idPeriodo = params['idPeriodo']
      this.idFormato = params['idFormato']
    })

    this.quizService.getQuizByForm(this.idFormato, this.idPeriodo).subscribe(data => {
      this.storeService.storeQuizByForm(data)
      this.questions = data?.preguntas ? data.preguntas : []
      this.quiz = data
      console.log('this.questions',this.questions)
    })

    this.storeService.quiz$.subscribe(data => {
      this.quiz = data
      this.questions = data?.preguntas ? data.preguntas : []
    })
  }

  goBack(){
    window.history.back();
  }
}
