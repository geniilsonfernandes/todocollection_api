import { Router } from 'express'
import { TaskCreateController } from '../controllers/Tasks/TaskCreateController'
import EnsureAuthenticated from '../middlewares/EnsureAuthenticated'
import { TaksListController } from '../controllers/Tasks/TaksListController'
import { TaskStatusController } from '../controllers/Tasks/TaskStatusController'

const tasks = Router()

const taskCreateController = new TaskCreateController()
const taksListController = new TaksListController()
const taskStatusController = new TaskStatusController()

tasks.get('/', EnsureAuthenticated, taksListController.handle)
tasks.post('/create', EnsureAuthenticated, taskCreateController.handle)
tasks.patch('/status', EnsureAuthenticated, taskStatusController.handle)

export { tasks }
