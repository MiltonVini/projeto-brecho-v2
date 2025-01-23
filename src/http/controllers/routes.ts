import { FastifyInstance } from 'fastify'
import { registerUser } from './register-user'
import { create } from './create-product'
import { insertSales } from './sales'
import { createBag } from './bag'
import { registerClient } from './register-client'

export async function appRoutes(app: FastifyInstance) {
  app.post('/user', registerUser)
  app.post('/client', registerClient)
  app.post('/product', create)
  app.post('/sales', insertSales)
  app.post('/bag', createBag)
}
