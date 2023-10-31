export interface Quiz {
  id?: number
  titulo: string
  pregunta: string
  respuesta: string
  pregunta_hija?: Quiz[]
}

export interface QuizDTO extends Partial<Quiz> {
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
  cuestionario: QuizDTO []
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
