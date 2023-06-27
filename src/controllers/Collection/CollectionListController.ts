import { Request, Response } from 'express'
import { collectionsRepository } from '../../repositories/collectionsRepository'

class CollectionListController {
  async handle(request: Request, response: Response) {
    const userid = 'c4866d0b-1b41-40a4-93ef-7d02adebd51c'

    try {
      const collections = await collectionsRepository.findBy({
        user: {
          id: userid,
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
