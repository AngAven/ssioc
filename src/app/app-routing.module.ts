import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./website/pages/login/login.component";
import {DashboardComponent} from "./website/pages/dashboard/dashboard.component";
import {QuizComponent} from "./website/components/quiz/quiz.component";
import {SendMailComponent} from "./website/components/send-mail/send-mail.component";
import {NotFoundComponent} from "./website/pages/not-found/not-found.component";
import {LayoutComponent} from "./website/components/layout/layout.component";

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
            }, {
                path: 'dashboard',
                component: DashboardComponent
            }, {
                path: 'quiz',
                component: QuizComponent
            }, {
                path: 'sendmail',
                component: SendMailComponent
            }
        ]
    },
    {
        path: 'cms',
        loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)

    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
