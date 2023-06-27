import { Request, Response } from 'express'
import { collectionsRepository } from '../../repositories/collectionsRepository'
import { userRepository } from '../../repositories/userRepository'

class CollectionCreateController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body

    console.log('rer')

    if (!name || !description) {
      return response.status(400).json({ message: 'Missing required data' })
    }

    try {
      const user = await userRepository.findOneBy({
        id: 'c4866d0b-1b41-40a4-93ef-7d02adebd51c',
      })

      if (!user) {
        return response.status(404).json({ message: 'User not found' })
      }

      const colletion = collectionsRepository.create({
        name,
        description,
        user: user,
      })

      await collectionsRepository.save(colletion)

      response.status(201).json({ message: 'Collection created successfully' })
    } catch (error) {
      console.log(error)

      return response.status(500).json({ message: `Internal Sever Error` })
    }
  }
}

export { CollectionCreateController }
