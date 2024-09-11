import { InMemoryToDoRepository }
  from '@/repositories/in-memory/in-memory-todo-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { ToDoUseCase } from './todo'

let toDoRepository: InMemoryToDoRepository
let sut: ToDoUseCase

describe('To-Do Use Case', () => {
  beforeEach(() => {
    toDoRepository = new InMemoryToDoRepository()
    sut = new ToDoUseCase(toDoRepository)
  })

  it('should be able to create a to-do', async () => {
    const { toDo } = await sut.execute({
      userId: 'user-01',
      description: 'teste',
      priority: 'LOW',
      status: 'PENDENT',
    })

    expect(toDo.id).toEqual(expect.any(String))
  })
})
