import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../utils/error/AppError'
import { errorHandler } from '../utils/error/errorHandler'
import { userRepository } from '../repositories/userRepository'

interface IPayload {
  sub: string
}

export default async function EnsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const authHeader = request.headers.authorization
    if (!authHeader) {
      throw new AppError('Token missing!', 401)
    }

    const [, token] = authHeader.split(' ')

    const { sub: user_id } = verify(token, '43425213') as IPayload

    const user = await userRepository.findOne({ where: { id: user_id } })

    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    request.user = {
      id: user_id,
    }

    next()
  } catch (error) {
    errorHandler(error, response)
  }
}

export { EnsureAuthenticated }
