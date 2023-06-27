import { Router } from 'express'
import { user } from './user.routes'
import { collections } from './collections.routes'

const router = Router()

router.use('/user', user)
router.use('/collections', collections)

export { router }
