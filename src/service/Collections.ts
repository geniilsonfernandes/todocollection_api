import { Collections } from '../entities/Collections'
import { collectionsRepository } from '../repositories/collectionsRepository'
import { userRepository } from '../repositories/userRepository'
import { IMessageResponse } from '../shared/types/IMessage'
import { AppError } from '../utils/error/AppError'

interface ICollectionsCreateRequest {
  name: string
  description: string
  user_id: string
}

interface ICollectionsUpdateRequest {
  collection_id: string
  data: {
    name: string
    description: string
  }
}

class CollectionsService {
  public async CreateCollection(
    data: ICollectionsCreateRequest,
  ): Promise<IMessageResponse> {
    if (!data.description || !data.name) {
      throw new AppError('Missing parameters', 400)
    }

    const user = await userRepository.findOneBy({
      id: data.user_id,
    })

    if (!user) {
      throw new AppError('User not found', 404)
    }

    const colletion = collectionsRepository.create({
      name: data.name,
      description: data.description,
      user: user,
    })

    await collectionsRepository.save(colletion)

    return {
      message: 'Collection created successfully',
    }
  }

  public async ListCollections(user_id: string): Promise<Collections[]> {
    const collections = await collectionsRepository.findBy({
      user: {
        id: user_id,
      },
    })

    if (!collections) {
      throw new AppError('Collections not found', 404)
    }

    return collections
  }

  public async DeleteCollection(
    collection_id: string,
  ): Promise<IMessageResponse> {
    const collection = await collectionsRepository.findOne({
      where: {
        id: collection_id,
      },
    })

    if (!collection) {
      throw new AppError('Collection not found', 404)
    }

    await collectionsRepository.delete(collection.id)

    return {
      message: 'Collection deleted successfully',
    }
  }

  public async UpdateCollection({
    collection_id,
    data,
  }: ICollectionsUpdateRequest): Promise<IMessageResponse> {
    const { name, description } = data

    if (!name || !description) {
      throw new AppError('Missing required data', 400)
    }

    const collection = await collectionsRepository.findOne({
      where: {
        id: collection_id,
      },
    })

    if (!collection) {
      throw new AppError('Collection not found', 404)
    }

    collection.name = name
    collection.description = description

    await collectionsRepository.save(collection)

    return {
      message: 'Collection updated successfully',
    }
  }
}

export { CollectionsService }
