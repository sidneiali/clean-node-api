import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'
import { SurveyModel } from '@/domain/models/survey'

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
})

export const mockAddSurveysParams = (): AddSurveyParams[] => ([
  mockAddSurveyParams(),
  {
    question: 'other_question',
    answers: [{
      image: 'other_image',
      answer: 'other_answer'
    }],
    date: new Date()
  }])

export const mockSurveyModel = (): SurveyModel => Object.assign(
  {},
  mockAddSurveyParams(),
  {
    id: 'any_id'
  }
)

export const mockSurveyModels = (): SurveyModel[] => {
  return [
    mockSurveyModel(),
    {
      id: 'other_id',
      question: 'other_question',
      answers: [{
        image: 'other_image',
        answer: 'other_answer'
      }],
      date: new Date()
    }]
}
