import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { SendMailComponent } from './components/send-mail/send-mail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    LoadingComponent,
    DashboardComponent,
    QuizComponent,
    QuizzesComponent,
    SendMailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
