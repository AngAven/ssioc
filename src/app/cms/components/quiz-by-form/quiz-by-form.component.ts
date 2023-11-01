import { Component, OnInit } from '@angular/core';

import {StoreService} from "../../../services/store.service";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quiz-by-form',
  templateUrl: './quiz-by-form.component.html',
  styleUrls: ['./quiz-by-form.component.scss']
})
export class QuizByFormComponent implements OnInit {

  constructor(
    private storeService: StoreService,
    private quizService: QuizService,
  ) {}

  ngOnInit() {

  }

}
