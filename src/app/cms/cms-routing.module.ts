import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';
import {LayoutComponent} from './components/layout/layout.component';
import {FormsComponent} from "./components/forms/forms.component";
import {CarousellComponent} from "../shared/components/carousell/carousell.component";
import {QuizByFormComponent} from "./components/quiz-by-form/quiz-by-form.component";
import {AddQuestionComponent} from "./components/add-question/add-question.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      },
      {
        path: 'admin',
        component: AdminDashboardComponent,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        pathMatch: 'full',
        path: 'quiz/:idPeriodo/:idFormato',
        component: QuizByFormComponent,
      },{
        path: 'quiz',
        component: QuizByFormComponent,
      },{
        path: 'addQuestion',
        component: AddQuestionComponent,
      },
      {
        path: 'swiper',
        component: CarousellComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule {
}
