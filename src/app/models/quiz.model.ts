export interface TypeQuiz {
  idPeriodo: number
  idTipoFormato: number
  nombreArchivo: string
  period: string
  quiz_number: number
}

export interface Quiz {
  id?: number
  titulo: string
  pregunta: string
  respuesta: string
  pregunta_hija?: Quiz[]
}

export interface TypeQuizDTO extends Partial<TypeQuiz> {

}

export interface EmailQuiz {
  formato_nombre: string
  formato_descripcion: string
  formato_periodo: string
  usuario_nombre: string
  usuario_correo: string
  cuestionario: Quiz[]
}

export interface SendEmailQuizDTO extends Partial<EmailQuiz> {

}

export interface RequestEmailQuiz {
  codigo: number
  mensaje: string
  destinatario: string
  asunto: string
}
