import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from "../../services/auth.service";
import {StoreService} from "../../services/store.service";
import {User} from "../../models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  register = {
    user: '',
    password: ''
  }

  loadingStatus: 'init' | 'success' | 'loading' | 'error' = 'init'

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private router: Router
  ) {}

  loginUser(){
    this.loadingStatus = 'loading'

    this.authService.login(this.register.user, this.register.password)
    .subscribe((response) => {
      console.log('response | login-service =>', response)
      this.loadingStatus = 'success'
      this.storeService.storeUser(response)
      this.router.navigateByUrl('dashboard')
    })
  }
}
