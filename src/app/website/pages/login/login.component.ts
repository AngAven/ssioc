import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {environment} from "../../../../enviroments/enviroment";

import {AuthService} from "../../../services/auth.service";
import {StoreService} from "../../../services/store.service";
import {UserDTO} from "../../../models/auth.model";

declare let $: any;

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

  passwordInputType: 'password' | 'text' = 'password'

  errorValidateField: string | null = null

  eyeIcon: boolean = false

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
    this.errorValidateField = null
    this.storeService.storeLoadingStatus('loading')

    if (this.validateLoginFields()) {
      if (this.captchaResponse) {

        this.authService.adminLogin(this.register.user, this.register.password)
          .subscribe(data => {
            if (data.codigo === 200) {
              this.storeService.storeLoadingStatus('init')
              this.router.navigateByUrl('cms')
            } else {
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
            }
          })
      } else {
        this.storeService.storeLoadingStatus('init')
        this.errorCaptcha = 'No se contesto captcha'
      }
    } else {
      this.storeService.storeLoadingStatus('init')
      this.errorValidateField = 'El usuario no debe de contener caracteres especiales a parte de un punto: ejemplo.usuario, y la contraseña sin espacios en blanco'
    }
  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse
  }

  changePasswordAttribute() {
    const element: HTMLElement | null = document.getElementById('password')
    if (element) {
      if (element.getAttributeNames().find(item => item === 'type')) {
        this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password'
        this.toggleEyeIcon()
      }
    }
  }

  toggleEyeIcon() {
    this.eyeIcon = !this.eyeIcon
  }

  validateLoginFields() {
    const whithoutSpace = /^\S+$/
    const oneDotInTheMiddle = /^[A-Za-z]*\.[A-Za-z]*$/
    const user = this.register.user
    if (user) {
      return whithoutSpace.test(this.register.user) && oneDotInTheMiddle.test(this.register.user)
    }
    return false
  }
}
