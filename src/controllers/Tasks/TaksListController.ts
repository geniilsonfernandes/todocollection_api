import { Request, Response } from 'express'
import { taskService } from '../../service'
import { errorHandler } from '../../utils/error/errorHandler'

class TaksListController {
  async handle(request: Request, response: Response) {
    try {
      const { collection_id } = request.body

      const task = await taskService.ListTasks(collection_id)

      return response.status(200).json(task)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export { TaksListController }
