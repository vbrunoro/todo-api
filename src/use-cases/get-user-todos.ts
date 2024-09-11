import { ToDoRepository } from '@/repositories/todo-repository'
import { ToDo } from '@prisma/client'

interface GetUserToDosUseCaseRequest {
  userId: string

}

interface GetUserToDosUseCaseResponse {
  toDo: ToDo[]
}

export class GetUserToDosUseCase {
  constructor(private toDoRepository: ToDoRepository) {}

  async execute({
    userId,

  }: GetUserToDosUseCaseRequest): Promise<GetUserToDosUseCaseResponse> {
    const toDo = await this.toDoRepository.findManyByUserId(userId)

    return {
      toDo,
    }
  }
}
