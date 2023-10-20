export interface Quiz {
  id?: number
  titulo: string
  pregunta: string
  respuesta: string
  pregunta_hija?: Quiz[]
}

export interface QuizDTO extends Partial<Quiz>{}

export interface QuizParams {
  mes: string
  quiz_response_params: string[]
}

export interface Form {
  formato_nombre: string
  formato_descripcion: string
  formato_periodo: string
  usuario_nombre: string
  usuario_correo: string
  cuestionario: QuizDTO []
}

export interface FormDTO extends Partial<Form> {}

export interface FormResponseDTO extends Partial<Form> {
  codigo: number
  mensaje: string
  destinatario: string
  asunto: string
}

export interface TypeQuiz {
  idPeriodo: number
  idTipoFormato: number
  nombreArchivo: string
  period: string
  quiz_number: number
}

export interface TypeQuizDTO extends Partial<TypeQuiz> {}
