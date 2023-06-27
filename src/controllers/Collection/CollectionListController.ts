import { Request, Response } from 'express'
import { collectionsService } from '../../service'

class CollectionListController {
  async handle(request: Request, response: Response) {
    const user_id = request.user.id

    try {
      const collections = await collectionsService.ListCollections(user_id)

      return response.status(200).json(collections)
    } catch (error) {
      return response.status(500).json({ message: `Internal Sever Error` })
    }
  }
}

export { CollectionListController }
