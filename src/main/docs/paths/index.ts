import { loginPath } from '@/main/docs/paths/login-path'
import { signUpPath } from '@/main/docs/paths/signup-path'
import { surveyPath } from '@/main/docs/paths/survey-path'
import { surveyResultPath } from '@/main/docs/paths/survey-result-path'

export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath
}
