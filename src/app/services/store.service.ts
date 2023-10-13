import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

import {User, UserDTO} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private userData: UserDTO = {}
  private user = new BehaviorSubject<UserDTO>({})
  user$ = this.user.asObservable()
  constructor() { }

  storeUser(user: User){
    this.userData = user
    this.user.next(this.userData)
  }
}
