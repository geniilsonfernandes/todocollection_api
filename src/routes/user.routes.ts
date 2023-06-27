import { Router } from 'express'
import { AuthenticatorUserController } from '../controllers/AuthenticatorUser/AuthenticatorUserController'
import { UserCreateController } from '../controllers/user/UserCreateController'

const userControler = new UserCreateController()
const auth = new AuthenticatorUserController()

const user = Router()

user.post('/create', userControler.handle)

user.post('/auth', auth.handle)

export { user }
