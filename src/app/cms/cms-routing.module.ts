import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';
import {LayoutComponent} from './components/layout/layout.component';
import {FormsComponent} from "./components/forms/forms.component";
import {QuizComponent} from "../shared/components/quiz/quiz.component";
import {CarousellComponent} from "../shared/components/carousell/carousell.component";

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
        path: 'quiz',
        component: QuizComponent,
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
