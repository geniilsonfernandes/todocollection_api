import { Router } from 'express'
import { UserController } from '../controllers/user/UserController'
import { AuthenticatorUserController } from '../controllers/AuthenticatorUser/AuthenticatorUserController'

const userControler = new UserController()
const auth = new AuthenticatorUserController()

const user = Router()

user.post('/create', userControler.create)

user.post('/auth', auth.handle)

export { user }
