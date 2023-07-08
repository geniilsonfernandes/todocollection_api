import { Response } from 'express'
import { AppError } from './AppError'

const errorHandler = (error: unknown, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }
  
  if (error instanceof Error) {
    return response.status(400).json({ message: error.message })
  }

  return response.status(500).json({ message: `Internal Sever Error` })
}

export { errorHandler }
