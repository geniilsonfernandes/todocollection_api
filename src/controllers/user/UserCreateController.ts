import { Request, Response } from 'express'
import { userService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

class UserCreateController {
  async handle(request: Request, response: Response) {
    try {
      const { nickname, password, email } = request.body
      const user = await userService.CreateUser({ nickname, password, email })
      return response.status(201).json(user)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { UserCreateController }
