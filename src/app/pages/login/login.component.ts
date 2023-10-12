import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth.service";

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
    private authService: AuthService
  ) {}

  loginUser(){
    console.log('register', this.register)
    this.loadingStatus = 'loading'

    this.authService.login(this.register.user, this.register.password)
    .subscribe(response => {
      this.loadingStatus = 'success'
      console.log('response =>', response)
    })
  }
}
