import { Request, Response } from 'express'
import { collectionsService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'
import { collectionBodyValidate } from './validations'

class CollectionCreateController {
  async handle(request: Request, response: Response) {
    try {
      const user_id = request.user.id
      const { name, description } = request.body

      await collectionBodyValidate.validate(request.body, { abortEarly: false })

      const colletion = await collectionsService.CreateCollection({
        description,
        name,
        user_id,
      })

      return response.status(201).json(colletion)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { CollectionCreateController }
