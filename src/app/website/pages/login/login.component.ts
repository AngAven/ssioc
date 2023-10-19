import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
        this.authService.login(this.register.user, this.register.password)
            .subscribe((response) => {
                console.log('response | login => ', response)
                if (response.status) {
                    console.log('response.status | login => ', response.status)
                    this.storeService.storeLoadingStatus('error')
                    this.errorResponse = response
                } else {
                    console.log('response | login-service =>', response)
                    this.storeService.storeLoadingStatus('success')
                    this.storeService.storeUser(response)
                    this.router.navigateByUrl('dashboard')
                }
            })
    }
}
