import { Request, Response } from 'express'
import { collectionsRepository } from '../../repositories/collectionsRepository'

class CollectionUpdateController {
  async handle(request: Request, response: Response) {
    const { id } = request.params as { id: string }
    const { name, description } = request.body

    if (!name || !description) {
      return response.status(400).json({ message: 'Missing required data' })
    }

    try {
      const collection = await collectionsRepository.findOneBy({
        id,
      })

      console.log(collection)

      if (!collection) {
        return response.status(404).json({ message: 'Collection not found' })
      }

      collection.name = name
      collection.description = description

      await collectionsRepository.save(collection)

      response.status(200).json({ message: 'Collection updated successfully' })
    } catch (error) {
      return response.status(500).json({ message: `Internal Sever Error` })
    }
  }
}

export { CollectionUpdateController }
