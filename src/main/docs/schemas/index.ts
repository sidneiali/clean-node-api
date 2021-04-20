import { accountSchema } from '@/main/docs/schemas/account-schema'
import { addSurveyParamsSchema } from '@/main/docs/schemas/add-survey-params-schema'
import { errorSchema } from '@/main/docs/schemas/error-schema'
import { loginParamsSchema } from '@/main/docs/schemas/login-params-schema'
import { saveSurveyParamsSchema } from '@/main/docs/schemas/save-survey-params-schema'
import { signUpParamsSchema } from '@/main/docs/schemas/signup-params-schema'
import { surveyAnswerSchema } from '@/main/docs/schemas/survey-answer-schema'
import { surveySchema } from '@/main/docs/schemas/survey-schema'
import { surveysSchema } from '@/main/docs/schemas/surveys-schema'
import { surveyResultAnswerSchema } from '@/main/docs/schemas/survey-result-answer-schema'
import { surveyResultSchema } from '@/main/docs/schemas/survey-result-schema'

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
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema
}
