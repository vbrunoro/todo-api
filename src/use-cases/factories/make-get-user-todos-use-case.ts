import { PrismaToDoRepository }
  from '@/repositories/prisma/prisma-todo-repository'
import { GetUserToDosUseCase } from '../get-user-todos'

export function makeToDoUseCase() {
  const toDoRepository = new PrismaToDoRepository()
  const useCase = new GetUserToDosUseCase(toDoRepository)

  return useCase
}
