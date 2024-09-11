import { makeGetUserToDosUseCase }
  from '@/use-cases/factories/make-get-user-todos-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  const getUserToDosUseCase = makeGetUserToDosUseCase()

  const { toDo } = await getUserToDosUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    toDo,
  })
}
