import { Request, Response } from 'express'
import { collectionsRepository } from '../../repositories/collectionsRepository'

class CollectionListController {
  async handle(request: Request, response: Response) {
    const user_id = request.user.id

    try {
      const collections = await collectionsRepository.findBy({
        user: {
          id: user_id,
        },
      })

      if (!collections) {
        return response.status(404).json({ message: 'Collections not found' })
      }

      response.status(200).json(collections)
    } catch (error) {
      return response.status(500).json({ message: `Internal Sever Error` })
    }
  }
}

export { CollectionListController }
