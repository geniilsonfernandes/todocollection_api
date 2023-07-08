import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'
import { taskStatusValidate } from './validations'

class TaskStatusController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id
      const { is_completed } = request.body as { is_completed: boolean }

      await taskStatusValidate.validate(request.body, { abortEarly: false })

      const task = await taskService.CompleteTask(id, is_completed)

      return response.status(200).json(task)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { TaskStatusController }
