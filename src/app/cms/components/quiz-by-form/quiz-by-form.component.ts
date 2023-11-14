import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, Validators, FormGroup, FormBuilder} from "@angular/forms";

import {StoreService} from "../../../services/store.service";
import {QuizService} from "../../../services/quiz.service";

import {
  Question,
  QuizDTO,
  QuestionDTO,
  Section,
  ElementTagTypes,
  ElementTag,
} from "../../../models/quiz.model";

@Component({
  selector: 'app-quiz-by-form',
  templateUrl: './quiz-by-form.component.html',
  styleUrls: ['./quiz-by-form.component.scss']
})
export class QuizByFormComponent implements OnInit {
  tableContainerType: 'container' | 'container-fluid' = 'container'

  quiz: QuizDTO = {}
  questions: Question[] | [] = []
  idFormato: number = 0
  idPeriodo: number = 0
  questionID: number = 0
  questionUpdated: QuestionDTO = {}

  sections: Section[] = []
  elementsTag: ElementTag[] = []
  elementTagTypes: ElementTagTypes[] = []

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private quizService: QuizService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idPeriodo = params['idPeriodo']
      this.idFormato = params['idFormato']
    })

    this.quizService.getQuizByForm(this.idFormato, this.idPeriodo).subscribe(data => {
      this.storeService.storeQuizByForm(data)
      this.questions = data?.preguntas ? data.preguntas : []
      this.quiz = data
    })

    this.storeService.quiz$.subscribe(data => {
      this.quiz = data
      this.questions = data?.preguntas ? data.preguntas : []
    })

    this.quizService.getSections(this.idPeriodo, this.idFormato).subscribe(data => {
      this.sections = data
      console.log('Secciones => ', this.sections)
    })

    this.quizService.getElementsTag().subscribe(data => {
      this.elementsTag = data
      console.log('Elementos => ', this.elementsTag)
    })

    this.quizService.getElementsTagTypes(1).subscribe(data => {
      this.elementTagTypes = data
      console.log('Tipos de elementos => ', this.elementTagTypes)
    })
  }

  goBack() {
    window.history.back();
  }

  enableUpdate(questionID: number) {
    this.tableContainerType = 'container-fluid'
    const questionForUpdate = this.questions.find(question => question.idPregunta === questionID)
    this.questionID = questionID
    this.questionUpdated = {
      ...questionForUpdate
    }
  }

  updateQuestion() {
    this.storeService.storeLoadingStatus('loading')
    this.quizService.updateQuestion(this.questionUpdated).subscribe(data => {
      console.log('data', data)
      this.storeService.storeLoadingStatus('init')
      this.resetChanges()
    })
  }

  resetChanges() {
    this.tableContainerType = 'container'
    this.questionID = 0
    this.questionUpdated = {}
    this.ngOnInit()
  }
}
