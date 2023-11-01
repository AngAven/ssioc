import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CmsRoutingModule} from './cms-routing.module';
import {SharedModule} from "../shared/shared.module";
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';
import {GridComponent} from './pages/grid/grid.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ModalComponent} from "../modal/modal.component";
import {FormsComponent} from './components/forms/forms.component';
import { QuizByFormComponent } from './components/quiz-by-form/quiz-by-form.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    GridComponent,
    LayoutComponent,
    NavbarComponent,
    FormsComponent,
    QuizByFormComponent,
  ],
  exports: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    ModalComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CmsModule {
}
