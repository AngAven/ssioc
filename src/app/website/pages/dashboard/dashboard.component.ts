import {Component, OnInit} from '@angular/core';

import {StoreService} from "../../../services/store.service";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string | undefined = ''
  roleId: string | undefined = ''

  constructor(
    private storeService: StoreService,
    private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
    this.storeService.user$.subscribe(userDTO => {
      this.username = userDTO.username
      this.roleId = userDTO.idRol
    })

    if (this.username != undefined && this.roleId != undefined) {
      this.quizService.getQuizType(this.username, this.roleId)
      .subscribe(data => {
        this.storeService.storeQuizType(data)
      })
    }
  }
}
