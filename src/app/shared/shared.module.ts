import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FormsModule} from '@angular/forms';

import {LoadingComponent} from './components/loading/loading.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {SendMailComponent} from './components/send-mail/send-mail.component';
import { CarousellComponent } from './components/carousell/carousell.component';

@NgModule({
  declarations: [
    LoadingComponent,
    QuizComponent,
    QuizzesComponent,
    SendMailComponent,
    CarousellComponent,
  ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
    ],
  exports: [
    LoadingComponent,
    QuizComponent,
    QuizzesComponent,
    SendMailComponent,
    CarousellComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
