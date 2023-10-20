import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SharedModule} from "../shared/shared.module";
import {ModalComponent} from "../modal/modal.component";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    GridComponent,
    LayoutComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    ModalComponent
  ]
})
export class CmsModule { }
