import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

import {User, UserDTO} from "../models/auth.model";
import {TypeQuiz, TypeQuizDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private userData: UserDTO = {}
  private user = new BehaviorSubject<UserDTO>({})
  user$ = this.user.asObservable()

  private quizType: TypeQuizDTO = {}
  private myQuizType = new BehaviorSubject<TypeQuizDTO>({})
  myQuizType$ = this.myQuizType.asObservable()

  constructor() { }

  storeUser(user: User){
    this.userData = user
    this.user.next(this.userData)
  }

  storeQuizType(quizType: TypeQuiz){
    this.quizType = quizType
    this.myQuizType.next(this.quizType)
  }
}
