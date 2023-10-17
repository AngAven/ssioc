import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {WebsiteRoutingModule} from './website-routing.module';

import {HomeComponent} from './pages/home/home.component';
import {NavComponent} from './components/nav/nav.component';
import {LoginComponent} from './pages/login/login.component';
import {LoadingComponent} from './components/loading/loading.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {SendMailComponent} from './components/send-mail/send-mail.component';
import {FooterComponent} from './components/footer/footer.component';
import {LayoutComponent} from './components/layout/layout.component';

@NgModule({
    declarations: [
        HomeComponent,
        NavComponent,
        LoginComponent,
        LoadingComponent,
        DashboardComponent,
        QuizComponent,
        QuizzesComponent,
        SendMailComponent,
        FooterComponent,
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        WebsiteRoutingModule,
    ]
})
export class WebsiteModule {
}
