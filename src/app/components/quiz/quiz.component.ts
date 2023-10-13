import {Component, OnInit} from '@angular/core';

import {StoreService} from "../../services/store.service";
import {QuizService} from "../../services/quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizNumber: number = 0
  quizPeriod: string = ''
  quiz: any = {}

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

    this.quizService.getQuiz(`formato${this.quizNumber}`, this.quizPeriod)
      .subscribe(data => {
        this.quiz = data
      })
  }
}
