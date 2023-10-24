import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {environment} from "../../../../enviroments/enviroment";

import {AuthService} from "../../../services/auth.service";
import {StoreService} from "../../../services/store.service";
import {UserDTO} from "../../../models/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  register = {
    user: '',
    password: ''
  }

  sitekey: string = environment.API_GOOGLE_RECAPTCHA
  captchaResponse: string = ''
  errorCaptcha: string = ''

  errorResponse: UserDTO = {}
  loadingStatus: string = ''

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.storeService.loadingStatus$.subscribe(data => {
      this.loadingStatus = data
    })
  }

  loginUser() {
    this.storeService.storeLoadingStatus('loading')

    if (this.captchaResponse) {
      this.authService.login(this.register.user, this.register.password)
        .subscribe((response) => {
          if (response.status) {
            this.storeService.storeLoadingStatus('error')
            this.errorResponse = response
          } else {
            this.storeService.storeLoadingStatus('success')
            this.storeService.storeUser(response)
            this.router.navigateByUrl('dashboard')
          }
        })
    } else {
      this.storeService.storeLoadingStatus('init')
      this.errorCaptcha = 'No se contesto captcha'
    }
  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse
  }
}
