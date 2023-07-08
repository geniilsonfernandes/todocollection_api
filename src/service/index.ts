import { CollectionsService } from './Collections'
import { TasksService } from './Tasks'
import { UserService } from './User'

const userService = new UserService()
const collectionsService = new CollectionsService()
const taskService = new TasksService()

export { userService, collectionsService, taskService }
