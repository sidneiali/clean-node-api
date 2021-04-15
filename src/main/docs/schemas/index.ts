import { accountSchema } from './account-schema'
import { addSurveyParamsSchema } from './add-survey-params-schema'
import { errorSchema } from './error-schema'
import { loginParamsSchema } from './login-params-schema'
import { saveSurveyParamsSchema } from './save-survey-params-schema'
import { signUpParamsSchema } from './signup-params-schema'
import { surveyAnswerSchema } from './survey-answer-schema'
import { surveySchema } from './survey-schema'
import { surveysSchema } from './surveys-schema'
import { surveyResultSchema } from './survey-result-schema'

export default {
  account: accountSchema,
  addSurveyParams: addSurveyParamsSchema,
  error: errorSchema,
  loginParams: loginParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  signUpParams: signUpParamsSchema,
  surveys: surveysSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema
}
