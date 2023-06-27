import { Router } from 'express'
import { CollectionCreateController } from '../controllers/Collection/CollectionCreateController'
import { CollectionListController } from '../controllers/Collection/CollectionListController'
import { CollectionUpdateController } from '../controllers/Collection/CollectioUpdateController'
import { CollectioDeleteController } from '../controllers/Collection/CollectioDeleteController'

const collectionCreateController = new CollectionCreateController()
const collectionListController = new CollectionListController()
const collectionUpdateController = new CollectionUpdateController()
const collectioDeleteController = new CollectioDeleteController()

const collections = Router()

collections.get('/', collectionListController.handle)
collections.post('/create', collectionCreateController.handle)
collections.put('/:id', collectionUpdateController.handle)
collections.delete('/:id', collectioDeleteController.handle)

export { collections }
