import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { adminAuth } from '@/main/middlewares/admin-auth'
import { auth } from '@/main/middlewares/auth'
import { makeAddSurveyController, makeLoadSurveysController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
