import { Request, Response } from 'express'
import { collectionsRepository } from '../../repositories/collectionsRepository'

class CollectioDeleteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params as { id: string }
    try {
      const collection = await collectionsRepository.findOneBy({
        id,
      })

      if (!collection) {
        return response.status(404).json({ message: 'Collection not found' })
      }

      await collectionsRepository.delete(collection)

      response.status(200).json({ message: 'Collection deleted successfully' })
    } catch (error) {
      return response.status(500).json({ message: `Internal Sever Error` })
    }
  }
}

export { CollectioDeleteController }
