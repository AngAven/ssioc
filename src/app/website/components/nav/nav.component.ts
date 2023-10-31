import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StoreService} from "../../../services/store.service";
import {AuthService} from "../../../services/auth.service";

import {environment} from "../../../../environments/environment";
import {UserDTO} from "../../../models/auth.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: UserDTO = {}
  navImage: string = environment.ASSETS_LOCATION + '/img/logosPREP.png'

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.storeService.user$.subscribe(data => {
      console.log('data => ', data)
      this.user = data
    })
  }

  endSession() {
    this.authService.endSession()
    this.router.navigateByUrl('login')
    window.location.reload()
  }
}
