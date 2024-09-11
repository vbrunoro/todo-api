import { InMemoryToDoRepository }
  from '@/repositories/in-memory/in-memory-todo-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { GetUserToDosUseCase } from './get-user-todos'

let toDoRepository: InMemoryToDoRepository
let sut: GetUserToDosUseCase

describe('Get User To-Dos Use Case', () => {
  beforeEach(() => {
    toDoRepository = new InMemoryToDoRepository()
    sut = new GetUserToDosUseCase(toDoRepository)
  })

  it('should be able to get user to-dos', async () => {
    await toDoRepository.create({
      user_id: 'user-01',
      description: 'teste1',
      priority: 'LOW',
      status: 'PENDENT',
    })

    await toDoRepository.create({
      user_id: 'user-01',
      description: 'teste2',
      priority: 'HIGH',
      status: 'PENDENT',
    })

    const { toDo } = await sut.execute({
      userId: 'user-01',
    })

    expect(toDo).toHaveLength(2)
    expect(toDo).toEqual([
      expect.objectContaining({ description: 'teste1' }),
      expect.objectContaining({ description: 'teste2' }),
    ])
  })
})
