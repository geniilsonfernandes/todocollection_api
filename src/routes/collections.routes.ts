import { Router } from 'express'
import { CollectionCreateController } from '../controllers/Collection/CollectionCreateController'
import { CollectionListController } from '../controllers/Collection/CollectionListController'

const collectionCreateController = new CollectionCreateController()
const collectionListController = new CollectionListController()

const collections = Router()

collections.use('/', collectionListController.handle)
collections.use('/create', collectionCreateController.handle)

export { collections }
