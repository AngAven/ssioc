import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizNumber: number = 0
  quizPeriod: string = ''

  constructor(
    private storeService: StoreService
  ) {
  }

  ngOnInit() {
    this.storeService.myQuizType$.subscribe(data => {
      if (data.quiz_number && data.period) {
        this.quizNumber = data.quiz_number
        this.quizPeriod = data?.period
      }
    })
  }
}
