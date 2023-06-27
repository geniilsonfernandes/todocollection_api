import { Router } from 'express'
import { UserCreateController } from '../controllers/user/UserCreateController'
import { AuthenticatorUserController } from '../controllers/AuthenticatorUser/AuthenticatorUserController'

const userControler = new UserCreateController()
const auth = new AuthenticatorUserController()

const user = Router()

user.post('/create', userControler.handle)

user.post('/auth', auth.handle)

export { user }
