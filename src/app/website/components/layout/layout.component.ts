import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StoreService} from "../../../services/store.service";
import {AuthService} from "../../../services/auth.service";

import {UserDTO} from "../../../models/auth.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: UserDTO = {}
  loadingStatus: string = ''
  username: string | null = ''

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.storeService.user$.subscribe(data => {
      this.user = data
    })

    if (!Object.keys(this.user).length) {
      this.authService.endSession()
      this.router.navigateByUrl('login')
    }

    this.storeService.loadingStatus$.subscribe(data => {
      this.loadingStatus = data
    })
  }
}
