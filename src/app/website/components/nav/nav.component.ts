import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StoreService} from "../../../services/store.service";

import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  username: any = ''
  navImage: string = environment.ASSETS_LOCATION + '/img/logosPREP.png'

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.storeService.user$.subscribe(data => {
      this.username = data.username
    })
  }

  endSession() {
    this.router.navigateByUrl('login')
    window.location.reload()
  }
}
