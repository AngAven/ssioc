import { Component } from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {Router} from "@angular/router";

import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  endSession() {
    this.authService.endSession()
    this.router.navigateByUrl('login')
  }
}
