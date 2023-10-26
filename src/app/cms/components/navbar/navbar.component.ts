import { Component } from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
  }

  endSession() {
    this.storeService.storeUser({})
    this.router.navigateByUrl('login')
  }
}
