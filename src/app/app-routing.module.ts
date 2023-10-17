import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {SendMailComponent} from "./components/send-mail/send-mail.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'quiz',
    component: QuizComponent
  },{
    path: 'sendmail',
    component: SendMailComponent
  },{
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
