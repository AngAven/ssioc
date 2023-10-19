import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FormsModule} from '@angular/forms';

import {LoadingComponent} from './components/loading/loading.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {SendMailComponent} from './components/send-mail/send-mail.component';

@NgModule({
  declarations: [
    LoadingComponent,
    QuizComponent,
    QuizzesComponent,
    SendMailComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ],
  exports: [
    LoadingComponent,
    QuizComponent,
    QuizzesComponent,
    SendMailComponent,
  ]
})
export class SharedModule { }
