import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

class TaskStatusController {
  async handle(request: Request, response: Response) {
    try {
      const { task_id, status } = request.body

      const task = await taskService.CompleteTask(task_id, status)

      return response.status(200).json(task)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { TaskStatusController }
