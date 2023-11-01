import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs'

import {UserDTO} from "../models/auth.model";
import {FormsAvailableDTO, FormsAvailable, TypeQuiz, TypeQuizDTO} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private userData: UserDTO = {}
  private user = new BehaviorSubject<UserDTO>({})
  user$ = this.user.asObservable()

  private quizType: TypeQuizDTO = {}
  private quizTypeBS = new BehaviorSubject<TypeQuizDTO>({})
  quizType$ = this.quizTypeBS.asObservable()

  private quiz: any = {}
  private quizBS = new BehaviorSubject<any>({})
  quiz$ = this.quizBS.asObservable()

  private loadingStatus: string = ''
  private loadingStatusBS = new BehaviorSubject<string>('init')
  loadingStatus$ = this.loadingStatusBS.asObservable()

  private formsAvailable: FormsAvailableDTO[] = []
  private formsAvailableBS = new BehaviorSubject<any>([])
  forms$ = this.formsAvailableBS.asObservable()

  constructor() {
  }

  isAdminUser() {
    const authenticatedUser: boolean = this.isAuthenticated()
    const userInLocalStorage: string | null = localStorage.getItem('user')

    if (authenticatedUser && userInLocalStorage) {
      const user: UserDTO = JSON.parse(userInLocalStorage)
      return user.usuarioAdmin === true
    }

    return false
  }

  isAuthenticated() {
    const userInLocalStorage: string | null = localStorage.getItem('user')
    return !!userInLocalStorage;
  }

  storeUser(user: UserDTO) {
    this.userData = user
    this.user.next(this.userData)
  }

  storeQuizType(quizType: TypeQuiz) {
    this.quizType = quizType
    this.quizTypeBS.next(this.quizType)
  }

  storeLoadingStatus(status: 'init' | 'success' | 'loading' | 'error') {
    this.loadingStatus = status
    this.loadingStatusBS.next(this.loadingStatus)
  }

  storeFormsAvailable(formsAvailable: FormsAvailable[]) {
    this.formsAvailable = formsAvailable
    this.formsAvailableBS.next(this.formsAvailable)
  }
}
