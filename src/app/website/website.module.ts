import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {WebsiteRoutingModule} from './website-routing.module';
import {SharedModule} from "../shared/shared.module";

import {RecaptchaModule} from "ng-recaptcha";

import {HomeComponent} from './pages/home/home.component';
import {NavComponent} from './components/nav/nav.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {FooterComponent} from './components/footer/footer.component';
import {LayoutComponent} from './components/layout/layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebsiteRoutingModule,
    SharedModule,
    RecaptchaModule,
  ]
})
export class WebsiteModule {
}
