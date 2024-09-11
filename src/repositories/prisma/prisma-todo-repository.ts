import { Prisma } from '@prisma/client'
import { ToDoRepository } from '../todo-repository'
import { prisma } from '@/lib/prisma'

export class PrismaToDoRepository implements ToDoRepository {
  async create(data: Prisma.ToDoUncheckedCreateInput) {
    const toDo = await prisma.toDo.create({
      data,
    })

    return toDo
  }

  async findManyByUserId(userId: string) {
    const checkIns = await prisma.toDo.findMany({
      where: {
        user_id: userId,
      },
    })

    return checkIns
  }
}
