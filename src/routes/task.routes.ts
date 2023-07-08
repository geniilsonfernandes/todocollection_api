import { Router } from 'express'
import { TaskCreateController } from '../controllers/Tasks/TaskCreateController'
import EnsureAuthenticated from '../middlewares/EnsureAuthenticated'
import { TaksListController } from '../controllers/Tasks/TaksListController'

const tasks = Router()

const taskCreateController = new TaskCreateController()
const taksListController = new TaksListController()

tasks.get('/', EnsureAuthenticated, taksListController.handle)
tasks.post('/create', EnsureAuthenticated, taskCreateController.handle)

export { tasks }
