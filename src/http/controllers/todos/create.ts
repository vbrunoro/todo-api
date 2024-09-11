import { makeToDoUseCase } from '@/use-cases/factories/make-todo-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createToDoBodySchema = z.object({
    description: z.string(),
    priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
    status: z.enum(['PENDENT', 'COMPLETED']),
  })

  const { description, priority, status } =
   createToDoBodySchema.parse(request.body)

  const toDoUseCase = makeToDoUseCase()

  await toDoUseCase.execute({
    userId: request.user.sub,
    description,
    priority,
    status,
  })

  return reply.status(201).send()
}
