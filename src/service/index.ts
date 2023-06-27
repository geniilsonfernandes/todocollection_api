import { CollectionsService } from './Collections'
import { UserService } from './User'

const userService = new UserService()
const collectionsService = new CollectionsService()

export { userService, collectionsService }
