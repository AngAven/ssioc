import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  // templateUrl: './not-found.component.html',
  template: `<div><img src="https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif" alt=""></div><app-loading *ngIf="loadingStatus === 'loading'"></app-loading> `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit{
  loadingStatus = ''

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.storeService.loadingStatus$.subscribe(data => {
      this.loadingStatus = data
    })

    this.storeService.storeLoadingStatus('loading')

    setTimeout(() => {
      this.storeService.storeLoadingStatus('init')
      this.router.navigateByUrl('login')
    }, 3000)
  }
}
