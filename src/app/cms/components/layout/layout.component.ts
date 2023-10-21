import {Component, OnInit} from '@angular/core';

import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  loadingStatus: string = ''

  constructor(
    private storeService: StoreService
  ) {
  }

  ngOnInit(): void {
    this.storeService.loadingStatus$.subscribe(data => {
      this.loadingStatus = data
    })
  }
}
