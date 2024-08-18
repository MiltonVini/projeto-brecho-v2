import { FastifyInstance } from 'fastify'
import { register } from './register'
import { create } from './create-product'
import { insertSales } from './sales'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/product', create)
  app.post('/sales', insertSales)
}
