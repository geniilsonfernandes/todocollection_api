import { Router } from 'express'
import { TaskCreateController } from '../controllers/Tasks/TaskCreateController'
import EnsureAuthenticated from '../middlewares/EnsureAuthenticated'

const tasks = Router()

const taskCreateController = new TaskCreateController()

tasks.post('/create', EnsureAuthenticated, taskCreateController.handle)

export { tasks }
