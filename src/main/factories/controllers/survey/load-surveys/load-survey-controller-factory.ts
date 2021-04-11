import { Controller } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurvey } from '@/main/factories/usecases/survey/load-surveys/db-load-surveys-factory'

export const makeloadSurveyController = (): Controller => {
  const dbLoadSurveys = makeDbLoadSurvey()
  const controller = new LoadSurveysController(dbLoadSurveys)
  return makeLogControllerDecorator(controller)
}
