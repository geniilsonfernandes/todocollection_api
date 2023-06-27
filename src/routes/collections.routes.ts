import { Router } from 'express'
import { CollectionCreateController } from '../controllers/Collection/CollectionCreateController'

const collectionCreateController = new CollectionCreateController()

const collections = Router()

collections.use('/create', collectionCreateController.handle)

export { collections }
