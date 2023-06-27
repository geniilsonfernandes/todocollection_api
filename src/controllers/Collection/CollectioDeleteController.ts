import { Request, Response } from 'express'
import { collectionsRepository } from '../../repositories/collectionsRepository'
import { AppError } from '../../utils/error/AppError'
import { errorHandler } from '../../utils/error/errorHandler'

class CollectioDeleteController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params as { id: string }
      const collection = await collectionsRepository.findOneBy({
        id,
      })

      if (!collection) {
        throw new AppError('Collection not found', 404)
      }

      await collectionsRepository.delete(collection)

      response.status(200).json({ message: 'Collection deleted successfully' })
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { CollectioDeleteController }
