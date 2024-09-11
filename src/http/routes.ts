import { FastifyInstance } from 'fastify'
import { register } from './controllers/users/register'
import { authenticate } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
import { verifyJwt } from './middlewares/verify-jwt'
import { create } from './controllers/todos/create'
import { list } from './controllers/todos/list'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
  app.post('/me/create-todo', { onRequest: [verifyJwt] }, create)
  app.get('/me/list-todos', { onRequest: [verifyJwt] }, list)
}
