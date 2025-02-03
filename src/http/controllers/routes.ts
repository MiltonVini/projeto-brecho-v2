import { FastifyInstance } from 'fastify'
import { registerUser } from './register-user'
import { createProduct } from './create-product'
import { insertSales } from './sales'
import { createBag } from './create-bag'
import { registerClient } from './register-client'
import { insertProductsInBag } from './insert-products-bag'
import { getProducts } from './get-products'
import { getBags } from './get-bags'
import { updateDeliveredBag } from './update-delivered-bag'

export async function appRoutes(app: FastifyInstance) {
  app.post('/user', registerUser)
  app.post('/client', registerClient)

  app.get('/product', getProducts)
  app.post('/product', createProduct)

  app.post('/sales', insertSales)

  app.get('/bag', getBags)
  app.post('/bag', createBag)
  app.patch('/bag/:bag_id', updateDeliveredBag)
  app.post('/bag/products', insertProductsInBag)
}
