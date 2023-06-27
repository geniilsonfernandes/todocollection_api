import { AppDataSource } from '../data-source'
import { Collections } from '../entities/Collections'

const collectionsRepository = AppDataSource.getRepository(Collections)

export { collectionsRepository }
