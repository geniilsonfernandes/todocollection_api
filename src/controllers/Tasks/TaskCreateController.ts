import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

class TaskCreateController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description, collection_id } = request.body

      const task = await taskService.CreateTask({
        name,
        description,
        collection_id,
      })
      return response.status(201).json(task)
    } catch (error) {
      console.log(error)

      errorHandler(error, response)
    }
  }
}

export { TaskCreateController }
