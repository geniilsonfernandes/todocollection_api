import { Request, Response } from 'express'
import { collectionsService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'
import { collectionUpdateValidate } from './validations'

class CollectionUpdateController {
  async handle(request: Request, response: Response) {
    const { id } = request.params as { id: string }
    const { name, description } = request.body

    try {
      await collectionUpdateValidate.validate(request.body, {
        abortEarly: false,
      })

      const update = await collectionsService.UpdateCollection({
        collection_id: id,
        data: { name, description },
      })

      return response.status(200).json(update)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { CollectionUpdateController }
