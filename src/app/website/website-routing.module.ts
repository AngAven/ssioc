import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {QuizComponent} from "../shared/components/quiz/quiz.component";
import {SendMailComponent} from "../shared/components/send-mail/send-mail.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {authGuardUser} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        canMatch: [authGuardUser],
        component: DashboardComponent
      },
      {
        path: 'quiz',
        component: QuizComponent
      },
      {
        path: 'sendmail',
        component: SendMailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {
}
