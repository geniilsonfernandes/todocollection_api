import { Router } from 'express'

const router = Router()

router.use('/user', router)

export { router }
