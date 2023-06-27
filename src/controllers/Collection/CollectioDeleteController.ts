import { Request, Response } from 'express'
import { collectionsService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

class CollectioDeleteController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params as { id: string }
      const deleteCollection = await collectionsService.DeleteCollection(id)

      return response.status(200).json(deleteCollection)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { CollectioDeleteController }
