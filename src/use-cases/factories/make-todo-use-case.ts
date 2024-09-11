import { PrismaToDoRepository }
  from '@/repositories/prisma/prisma-todo-repository'
import { ToDoUseCase } from '../todo'

export function makeToDoUseCase() {
  const toDoRepository = new PrismaToDoRepository()
  const useCase = new ToDoUseCase(toDoRepository)

  return useCase
}
