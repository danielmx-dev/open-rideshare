import Router from 'koa-router'

import logger from '../middleware/logger'
import setPool from '../middleware/set-connection-pool'

import createRider from './handlers/create-rider'

const router = Router({
  prefix: '/riders'
})

router.use(logger())
router.use(setPool())

router.post('/', createRider)

export default router
