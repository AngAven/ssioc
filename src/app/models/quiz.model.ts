export interface QuizForEmailSend {
  id?: number
  titulo: string
  pregunta: string
  respuesta: string
  pregunta_hija?: QuizForEmailSend[]
}

export interface QuizDTOForEmailSend extends Partial<QuizForEmailSend> {
}

export interface QuizParams {
  mes: string
  quiz_response_params: string[]
}

export interface FormEmailSend {
  formato_nombre: string
  formato_descripcion: string
  formato_periodo: string
  usuario_nombre: string
  usuario_correo: string
  cuestionario: QuizDTOForEmailSend []
}

export interface FormDTO extends Partial<FormEmailSend> {
}

export interface FormResponseDTO extends Partial<FormEmailSend> {
  codigo: number
  mensaje: string
  destinatario: string
  asunto: string
}

export interface FormsAvailable {
  id: number
  fecha_final: string
  fecha_inicio: string
  formato_id: number
  formato_nombre: string
  iterable: string
  nombre_formato: string
  nombre_periodo: string
  rol: string
  vigente: boolean
}

export interface FormsAvailableDTO extends Partial<FormsAvailable> {
}

export interface TypeQuiz {
  idPeriodo: number
  idTipoFormato: number
  nombreArchivo: string
  period: string
  quiz_number: number
}

export interface TypeQuizDTO extends Partial<TypeQuiz> {
}

export interface Question {
  idPregunta: number
  idSeccion: number
  seccion: string
  pregunta: string
  obligatorio: boolean
  elemento: string
  tipo: string
  visible: boolean
  pregunta_hija: QuestionChild[]
}
export interface QuestionDTO extends Partial<Question> {
}

export interface QuestionChild extends Omit<Question, 'pregunta_hija'>{

}

export interface Quiz {
  formato_id: number
  preguntas: Question[]
}

export interface QuizDTO extends Partial<Quiz> {
}
