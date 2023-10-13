export interface TypeQuiz{
  idPeriodo: number
  idTipoFormato: number
  nombreArchivo: string
  period: string
  quiz_number: number
}

export interface TypeQuizDTO extends Partial<TypeQuiz>{

}
