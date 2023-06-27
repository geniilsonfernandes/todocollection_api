import { Router } from 'express'
import { UserController } from '../controllers/user/UserController'

const userControler = new UserController()

const user = Router()

user.post('/create', userControler.create)

export { user }
