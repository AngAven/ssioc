import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {QuizService} from "../../../services/quiz.service";

import {StoreService} from "../../../services/store.service";

import {FormsAvailable, QuestionToSaveDTO} from "../../../models/quiz.model";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  availableForms: FormsAvailable[] = []
  questionToSave: QuestionToSaveDTO = {}
  messageError = ''

  constructor(
    private router: Router,
    private storeService: StoreService,
    private quizService: QuizService,
  ) {
  }

  ngOnInit() {
    this.quizService.getAvailableForms().subscribe((data) => {
      this.storeService.storeFormsAvailable(data)
      this.availableForms = data
    })
  }

  goBack() {
    window.history.back();
  }

  onFormSubmit() {
    const periodValueSelected = parseInt((document.getElementById('select-period') as HTMLSelectElement).value)
    const formValueSelected = parseInt((document.getElementById('select-form') as HTMLSelectElement).value)
    const sectionValueSelected = parseInt((document.getElementById('select-section') as HTMLSelectElement).value)
    const question = (document.getElementById('question') as HTMLInputElement).value
    const questionRequired = (document.getElementById('question-required') as HTMLInputElement).checked
    const questionElement = (document.getElementById('question-element') as HTMLSelectElement).value
    const questionElementType = (document.getElementById('question-element-type') as HTMLSelectElement).value
    const questionVisible = (document.getElementById('question-visible') as HTMLInputElement).checked

    if (Number.isInteger(periodValueSelected) && Number.isInteger(formValueSelected) && Number.isInteger(sectionValueSelected)) {
      this.questionToSave = {
        periodo_id: periodValueSelected,
        formato_id: formValueSelected,
        preguntas: [
          {
            idSeccion: sectionValueSelected,
            pregunta: question,
            orden: 1,
            obligatorio: questionRequired,
            elemento: questionElement,
            tipo: questionElementType,
            esVisible: questionVisible
          }
        ]
      }

      console.log(this.questionToSave)
      this.storeService.storeLoadingStatus('loading')
      this.quizService.addQuestion(this.questionToSave).subscribe((data) => {
        console.log(data)
        this.storeService.storeLoadingStatus('init')
        this.router.navigate(['/cms/quiz'], {
          queryParams: {
            idPeriodo: periodValueSelected,
            idFormato: formValueSelected
          }
        })
      })
    } else {
      this.messageError = 'Debes seleccionar una opción válida'
    }
  }
}
