import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'
import { ITasksUpdateRequest } from '../../service/Tasks'

class TaskUpdateController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id as string
      const { name, description, is_completed } =
        request.body as ITasksUpdateRequest

      const task = await taskService.UpdateTask({
        name,
        description,
        is_completed,
        task_id: id,
      })

      return response.status(200).json(task)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { TaskUpdateController }
