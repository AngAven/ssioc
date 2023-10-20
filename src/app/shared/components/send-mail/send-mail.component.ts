import {Component} from '@angular/core';

import {EmailService} from "../../../services/email.service";
import {StoreService} from "../../../services/store.service";

import {RequestEmailQuiz, SendEmailQuizDTO} from "../../../models/quiz.model";

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent {

  url_params = 'mes=Enero&pregunta1=No&pregunta2=No&pregunta3=No&pregunta4=No&pregunta5=No&pregunta6=No&tresNodos=No&telefonoIp=No&cablesDeRed=No&switch=Sí&pregunta8=No&pregunta9=No&materialDeIdentificacion=Sí&materialElectrico=No&cartoneria=No&papeleria=No&actasDePrueba=No&codigosQRDePrueba=No&pregunta11=La incorporación del personal comisionado&pregunta12=No&pregunta12a=&pregunta13=zxc&timestamp=01/01/2024 12:31:54&estado=Oficinas centrales, las chidas&junta=0&usuario=pepin.olguin.2&correo=angel.avendano@ine.mx&'
  jsonQuiz: SendEmailQuizDTO = {
    "formato_nombre": "Formato 1",
    "formato_descripcion": "Formato 1 descripción",
    "formato_periodo": "Morbi vel lectus in quam fringilla rhoncus.",
    "usuario_nombre": "angel avendaño",
    "usuario_correo": "angel.avendano@ine.mx",
    "cuestionario": [
      {
        "titulo": "Ut at dolor quis odio consequat varius.",
        "pregunta": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.?",
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
        "pregunta": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.?",
        "respuesta": "Vestibulum sed magna at nunc commodo placerat.",
        "pregunta_hija": []
      },
      {
        "titulo": "Nulla tempus.",
        "pregunta": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.?",
        "respuesta": "Pellentesque eget nunc.",
        "pregunta_hija": []
      },
      {
        "titulo": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "pregunta": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.?",
        "respuesta": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "pregunta_hija": []
      }
    ]
  }
  jsonQuizResponse: RequestEmailQuiz = {
    codigo: 0,
    mensaje: '',
    destinatario: '',
    asunto: '',
  }

  constructor(
    private storeService: StoreService,
    private emailService: EmailService,
  ) {
  }

  sendMailJSON() {
    this.storeService.storeLoadingStatus('loading')
    this.emailService.sendMail(this.jsonQuiz).subscribe(data => {
      console.log('data | response email quiz => ', data)
      if (data.codigo === 200){
        this.storeService.storeLoadingStatus('success')
        this.jsonQuizResponse = data
      }
    })
  }
}
