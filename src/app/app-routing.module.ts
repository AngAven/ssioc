import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {QuizComponent} from "./components/quiz/quiz.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
