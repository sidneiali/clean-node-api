import { DbSaveSurveyResult } from './db-save-survey-result'
import { SaveSurveyResultParams, SurveyResultModel, SaveSurveyResultRepository } from './db-save-survey-result-protocols'
import MockDate from 'mockdate'

const makeFakeSurveyResultData = (): SaveSurveyResultParams => ({
  accountId: 'any_accountId',
  surveyId: 'any_surveyId',
  answer: 'any_answer',
  date: new Date()
})

const makeFakeSurveyResultModel = (): SurveyResultModel => Object.assign({}, makeFakeSurveyResultData(), {
  id: 'any_id'
})

const makeSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return new Promise(resolve => resolve(makeFakeSurveyResultModel()))
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

type SutTypes = {
  sut: DbSaveSurveyResult
  saveSurveyResultRepositoryStub: SaveSurveyResultRepository
}

const makeSut = (): SutTypes => {
  const saveSurveyResultRepositoryStub = makeSaveSurveyResultRepository()
  const sut = new DbSaveSurveyResult(saveSurveyResultRepositoryStub)
  return {
    sut,
    saveSurveyResultRepositoryStub
  }
}

describe('DbSaveSurveyResult Usecase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  test('Should call SaveSurveyResultRepository with correct values', async () => {
    const { sut, saveSurveyResultRepositoryStub } = makeSut()
    const saveSpy = jest.spyOn(saveSurveyResultRepositoryStub, 'save')
    const surveyResultData = makeFakeSurveyResultData()
    await sut.save(surveyResultData)
    expect(saveSpy).toHaveBeenCalledWith(surveyResultData)
  })

  test('Should return SurveyResult on success', async () => {
    const { sut } = makeSut()
    const surveyResult = await sut.save(makeFakeSurveyResultData())
    expect(surveyResult).toEqual(makeFakeSurveyResultModel())
  })

  test('Should throws if SaveSurveyResultRepository throws', async () => {
    const { sut, saveSurveyResultRepositoryStub } = makeSut()
    jest.spyOn(saveSurveyResultRepositoryStub, 'save')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.save(makeFakeSurveyResultData())
    await expect(promise).rejects.toThrow()
  })
})
