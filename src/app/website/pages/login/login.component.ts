import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from "../../../services/auth.service";
import {StoreService} from "../../../services/store.service";
import {UserDTO} from "../../../models/auth.model";

declare let grecaptcha: any

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

  errorResponse: UserDTO = {}
  errorCaptcha: string = ''
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

    this.errorCaptcha = ''
  }

  loginUser() {
    this.storeService.storeLoadingStatus('loading')
    let responseCaptcha = grecaptcha.getResponse()

    if (responseCaptcha) {
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
}
