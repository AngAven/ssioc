import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './website/components/nav/nav.component';
import { LoginComponent } from './website/pages/login/login.component';
import { LoadingComponent } from './website/components/loading/loading.component';
import { DashboardComponent } from './website/pages/dashboard/dashboard.component';
import { QuizComponent } from './website/components/quiz/quiz.component';
import { QuizzesComponent } from './website/components/quizzes/quizzes.component';
import { SendMailComponent } from './website/components/send-mail/send-mail.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { LayoutComponent } from './website/components/layout/layout.component';

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
    NotFoundComponent,
    FooterComponent,
    LayoutComponent
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
