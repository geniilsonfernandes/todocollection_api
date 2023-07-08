import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'
import { taskBodyValidate } from './validations'
import { ITasksCreateRequest } from '../../service/Tasks'

class TaskCreateController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description, collection_id } =
        request.body as ITasksCreateRequest

      await taskBodyValidate.validate(request.body, { abortEarly: false })

      const task = await taskService.CreateTask({
        name,
        description,
        collection_id,
      })

      return response.status(201).json(task)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { TaskCreateController }
