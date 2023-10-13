import {Component, OnInit} from '@angular/core';

import {StoreService} from "../../services/store.service";
import {User, UserDTO} from "../../models/auth.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.user$.subscribe(userDTO => {
    })
  }
}
