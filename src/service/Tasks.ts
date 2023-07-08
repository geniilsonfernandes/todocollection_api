import { Tasks } from '../entities/Tasks'
import { collectionsRepository } from '../repositories/collectionsRepository'
import { tasksRepository } from '../repositories/tasksRepository'
import { IMessageResponse } from '../shared/types/IMessage'
import { AppError } from '../utils/error/AppError'

interface ITasksCreateRequest {
  name: string
  description: string
  collection_id: string
}

class TasksService {
  public async CreateTask(
    data: ITasksCreateRequest,
  ): Promise<IMessageResponse> {
    if (!data.description || !data.name || !data.collection_id) {
      throw new AppError('Missing parameters', 400)
    }

    const colletion = await collectionsRepository.findOne({
      where: {
        id: data.collection_id,
      },
    })

    if (!colletion) {
      throw new AppError('Collection not found', 404)
    }

    const task = tasksRepository.create({
      name: data.name,
      description: data.description,
      collections: colletion,
    })

    await tasksRepository.save(task)

    return {
      message: 'Task created successfully',
    }
  }

  public async ListTasks(collection_id: string): Promise<Tasks[]> {
    if (!collection_id) {
      throw new AppError('Missing parameters', 400)
    }

    const tasks = await tasksRepository.find({
      order: {
        created_at: 'DESC',
      },
      where: {
        collections: {
          id: collection_id,
        },
      },
    })

    if (!tasks) {
      throw new AppError('Tasks not found', 404)
    }

    return tasks
  }

  public async UpdateTask(
    task_id: string,
    data: ITasksCreateRequest,
  ): Promise<IMessageResponse> {
    const task = await tasksRepository.findOne({
      where: {
        id: task_id,
      },
    })

    if (!task) {
      throw new AppError('Task not found', 404)
    }

    task.name = data.name
    task.description = data.description

    await tasksRepository.save(task)

    return {
      message: 'Task updated successfully',
    }
  }

  public async DeleteTask(task_id: string): Promise<IMessageResponse> {
    const task = await tasksRepository.findOne({
      where: {
        id: task_id,
      },
    })

    if (!task) {
      throw new AppError('Task not found', 404)
    }

    await tasksRepository.delete(task)

    return {
      message: 'Task deleted successfully',
    }
  }

  public async CompleteTask(task_id: string): Promise<IMessageResponse> {
    const task = await tasksRepository.findOne({
      where: {
        id: task_id,
      },
    })

    if (!task) {
      throw new AppError('Task not found', 404)
    }

    task.is_completed = true

    await tasksRepository.save(task)

    return {
      message: 'Task completed successfully',
    }
  }
}

export { TasksService }
