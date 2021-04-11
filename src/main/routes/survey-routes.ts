import { adaptRoute } from '../adapters/express-route-adapter'
import { adminAuth } from '../middlewares/admin-auth'
import { auth } from '../middlewares/auth'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeloadSurveyController } from '@/main/factories/controllers/survey/load-surveys/load-survey-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeloadSurveyController()))
}
