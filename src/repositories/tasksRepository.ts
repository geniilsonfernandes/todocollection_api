import { AppDataSource } from '../data-source'
import { Tasks } from '../entities/Tasks'

const tasksRepository = AppDataSource.getRepository(Tasks)

export { tasksRepository }
