import { Router } from 'express'
import { CollectionCreateController } from '../controllers/Collection/CollectionCreateController'
import { CollectionListController } from '../controllers/Collection/CollectionListController'
import { CollectionUpdateController } from '../controllers/Collection/CollectioUpdateController'
import { CollectioDeleteController } from '../controllers/Collection/CollectioDeleteController'
import EnsureAuthenticated from '../middlewares/EnsureAuthenticated'

const collectionCreateController = new CollectionCreateController()
const collectionListController = new CollectionListController()
const collectionUpdateController = new CollectionUpdateController()
const collectioDeleteController = new CollectioDeleteController()

const collections = Router()

collections.get('/', EnsureAuthenticated, collectionListController.handle)
collections.post('/', EnsureAuthenticated, collectionCreateController.handle)
collections.put('/:id', EnsureAuthenticated, collectionUpdateController.handle)
collections.delete(
  '/:id',
  EnsureAuthenticated,
  collectioDeleteController.handle,
)

export { collections }
