import { Router } from 'express'
import { user } from './user.routes'
import { collections } from './collections.routes'
import { tasks } from './task.routes'

const router = Router()

router.use('/user', user)
router.use('/collections', collections)
router.use('/tasks', tasks)

export { router }
