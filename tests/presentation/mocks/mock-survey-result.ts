import { mockSurveyResultModel } from '@/tests/domain/mocks'
import { LoadSurveyResult, SaveSurveyResult } from '@/domain/usecases'

export class SaveSurveyResultSpy implements SaveSurveyResult {
  result = mockSurveyResultModel()
  saveSurveyResultParams: SaveSurveyResult.Params

  async save (data: SaveSurveyResult.Params): Promise<SaveSurveyResult.Result> {
    this.saveSurveyResultParams = data
    return this.result
  }
}

export class LoadSurveyResultSpy implements LoadSurveyResult {
  result = mockSurveyResultModel()
  surveyId: string
  accountId: string

  async load (data: LoadSurveyResult.Params): Promise<LoadSurveyResult.Result> {
    this.surveyId = data.surveyId
    this.accountId = data.accountId
    return this.result
  }
}
