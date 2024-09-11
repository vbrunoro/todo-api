import { ToDoRepository } from '@/repositories/todo-repository'
import { ToDo, ToDoPriority, ToDoStatus } from '@prisma/client'

interface ToDoUseCaseRequest {
  userId: string
  description: string
  priority: ToDoPriority
  status: ToDoStatus
}

interface ToDoUseCaseResponse {
  toDo: ToDo
}

export class ToDoUseCase {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute({
    userId,
    description,
    priority,
    status,
  }: ToDoUseCaseRequest): Promise<ToDoUseCaseResponse> {
    const toDo = await this.toDoRepository.create({
      user_id: userId,
      description,
      priority,
      status,
    })

    return {
      toDo,
    }
  }
}
