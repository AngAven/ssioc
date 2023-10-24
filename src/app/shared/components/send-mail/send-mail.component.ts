import {Component, OnInit} from '@angular/core';

import {EmailService} from "../../../services/email.service";
import {GoogleAppScriptService} from "../../../services/google-app-script.service";
import {StoreService} from "../../../services/store.service";

import {FormResponseDTO, FormDTO, QuizParams} from "../../../models/quiz.model";

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent  implements OnInit{
  loadingStatus = ''

  url_params = 'mes=Enero&pregunta1=No&pregunta2=No&pregunta3=No&pregunta4=No&pregunta5=No&pregunta6=No&tresNodos=No&telefonoIp=No&cablesDeRed=No&switch=Sí&pregunta8=No&pregunta9=No&materialDeIdentificacion=Sí&materialElectrico=No&cartoneria=No&papeleria=No&actasDePrueba=No&codigosQRDePrueba=No&pregunta11=La incorporación del personal comisionado&pregunta12=No&pregunta12a=&pregunta13=zxc&timestamp=01/01/2024 12:31:54&estado=Oficinas centrales, las chidas&junta=0&usuario=pepin.olguin.2&correo=angel.avendano@ine.mx&'
  answeredQuiz: FormDTO = {
    "formato_nombre": "Formato 1",
    "formato_descripcion": "Formato 1 descripción",
    "formato_periodo": "Marzo",
    "usuario_nombre": "angel avendaño",
    "usuario_correo": "ssioc@ine.mx",
    "cuestionario": [
      {
        "titulo": "Ut at dolor quis odio consequat varius.",
        "pregunta": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat",
        "respuesta": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "pregunta_hija": [
          {
            "titulo": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "pregunta": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
            "respuesta": "Curabitur convallis."
          }
        ]
      },
      {
        "titulo": "Mauris ullamcorper purus sit amet nulla.",
        "pregunta": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor",
        "respuesta": "Vestibulum sed magna at nunc commodo placerat.",
        "pregunta_hija": []
      },
      {
        "titulo": "Nulla tempus.",
        "pregunta": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy",
        "respuesta": "Pellentesque eget nunc.",
        "pregunta_hija": []
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": []
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": []
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": []
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": []
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": [
          {
            "titulo": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "pregunta": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
            "respuesta": "Mi respuesta"
          }
        ]
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": []
      },
    ]
  }
  jsonQuizResponse: FormResponseDTO = {
    codigo: 0,
    mensaje: '',
    destinatario: '',
    asunto: '',
  }

  constructor(
    private storeService: StoreService,
    private emailService: EmailService,
    private googleService: GoogleAppScriptService
  ) {
  }

  ngOnInit(): void {
    this.storeService.loadingStatus$.subscribe(data => {
      this.loadingStatus = data
    })
  }


  sendMail(){
    this.sendMailToUserAnsweredQuiz()
    this.sendAnsweredQuizToGoogleScript()
  }

  sendMailToUserAnsweredQuiz(answeredQuiz: FormDTO = this.answeredQuiz) {
    this.storeService.storeLoadingStatus('loading')
    this.emailService.sendToUserAnsweredQuiz(answeredQuiz).subscribe(data => {
      if (data.codigo === 200) {
        this.storeService.storeLoadingStatus('success')
        this.jsonQuizResponse = data
      }
    })
  }

  sendAnsweredQuizToGoogleScript(answeredQuiz: FormDTO = this.answeredQuiz) {
    this.storeService.storeLoadingStatus('loading')
    const stringParams: string = this.jsonToParams(answeredQuiz)
    this.googleService.newRecord(stringParams).subscribe(data => {
      this.storeService.storeLoadingStatus('success')
    })
  }

  jsonToParams(answeredQuiz: FormDTO) {
    const form = answeredQuiz
    const qiz = form.cuestionario
    const paramsArray: string[] = []

    paramsArray.push('mes' + '=' + form.formato_periodo)

    qiz?.map((item, i) => {
      let questionNumber = ++i
      // @ts-ignore
      const hasChildren = !!Object.keys(item.pregunta_hija).length

      if (item.pregunta) {
        paramsArray.push('pregunta' + questionNumber + '=' + item.respuesta)
      }

      if (hasChildren) {
        // @ts-ignore
        const childrenQuestion: string | undefined = item.pregunta_hija[0].respuesta
        paramsArray.push('pregunta' + questionNumber + 'a' + '=' + childrenQuestion)
      }
    })

    return paramsArray.join('&')
  }
}
