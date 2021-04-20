export interface AddSurvey {
  add: (data: AddSurvey.Params) => Promise<void>
}

export namespace AddSurvey {
  export type Params = {
    question: string
    answers: SurveyAnswerModel[]
    didAnswer?: boolean
    date: Date
  }
  type SurveyAnswerModel = {
    image?: string
    answer: string
  }
}
