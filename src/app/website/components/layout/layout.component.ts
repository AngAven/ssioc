import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {StoreService} from "../../../services/store.service";
import {UserDTO} from "../../../models/auth.model";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    userData: UserDTO = {}

    constructor(
        private storeService: StoreService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.storeService.user$.subscribe(userDTO => {
            this.userData = userDTO
        })

        if (!Object.keys(this.userData).length) {
            this.router.navigateByUrl('login')
        }
    }
}
