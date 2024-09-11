import { Prisma, ToDo } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { ToDoRepository } from '../todo-repository'

export class InMemoryToDoRepository implements ToDoRepository {
  public items: ToDo[] = []
  async findManyByUserId(userId: string) {
    return this.items
      .filter((toDo) => toDo.user_id === userId)
  }

  async create(data: Prisma.ToDoUncheckedCreateInput) {
    const toDo = {
      id: randomUUID(),
      user_id: data.user_id,
      description: data.description,
      priority: data.priority!,
      status: data.status!,
      created_at: new Date(),
    }

    this.items.push(toDo)

    return toDo
  }
}
