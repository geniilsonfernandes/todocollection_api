import { Request, Response } from 'express'
import { userService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

import * as yup from 'yup'

interface YupValidationError extends yup.ValidationError {
  path: string
}

const userCreateValidate = yup.object().shape({
  nickname: yup
    .string()
    .test('len', 'Must be exactly 6 characters', (val) => {
      if (val) return val.length === 6
    })
    .required('Nickname is required'),

  password: yup.string().required('Password is required'),
  email: yup.string().email().required('Email is required'),
})

class UserCreateController {
  async handle(request: Request, response: Response) {
    try {
      const { nickname, password, email } = request.body

      await userCreateValidate.validate(request.body, { abortEarly: false })

      const user = await userService.CreateUser({ nickname, password, email })
      return response.status(201).json(user)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { UserCreateController }
