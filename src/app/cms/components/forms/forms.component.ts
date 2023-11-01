import {Component, OnInit} from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { register } from 'swiper/element/bundle';
register();

import {StoreService} from "../../../services/store.service";
import {QuizService} from "../../../services/quiz.service";
import {FormsAvailableDTO} from "../../../models/quiz.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formsAvailable: FormsAvailableDTO[] = []

  constructor(
    private quizService: QuizService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.quizService.getAvailableForms().subscribe((data) => {
      this.storeService.storeFormsAvailable(data)
      this.formsAvailable = data
    });
  }
}
