import { apiKeyAuth } from './api-key-auth'
import { loginPath } from './login-path'
import { signUpPath } from './signup-path'
import { surveyPath } from './survey-path'
import { surveyResultPath } from './survey-result-path'

export default {
  securitySchemes: {
    apiKeyAuth
  },
  '/login': loginPath,
  '/signup': signUpPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath
}
