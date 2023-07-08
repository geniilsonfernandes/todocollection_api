import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

class TaskDeleteController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id as string

      const task = await taskService.DeleteTask(id)

      return response.status(200).json(task)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { TaskDeleteController }
