import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { LoadSurveysController } from '../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller'
import { makeDbLoadSurvey } from '../../../usecases/survey/load-surveys/db-load-surveys-factory'

export const makeloadSurveyController = (): Controller => {
  const dbLoadSurveys = makeDbLoadSurvey()
  const controller = new LoadSurveysController(dbLoadSurveys)
  return makeLogControllerDecorator(controller)
}
