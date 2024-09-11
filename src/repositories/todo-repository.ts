import { ToDo, Prisma } from '@prisma/client'

export interface ToDoRepository {
  create(data: Prisma.ToDoUncheckedCreateInput): Promise<ToDo>
  findManyByUserId(userId: string): Promise<ToDo[]>
}
