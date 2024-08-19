import { PrismaProductRepository } from '@/repositories/prisma/products-repository'
import { PrismaSalesRepository } from '@/repositories/prisma/sales-repository'
import { SalesUseCase } from '@/use-cases/sales'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function insertSales(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const insertSalesBodySchema = z.object({
    product_list: z.array(z.string()),
    client_id: z.string().optional(),
    bag_id: z.string().optional(),
  })

  const data = insertSalesBodySchema.parse(request.body)

  try {
    const productRepository = new PrismaProductRepository()
    const salesRepository = new PrismaSalesRepository()
    const salesUseCase = new SalesUseCase(salesRepository, productRepository)

    await salesUseCase.execute(data)
  } catch (error) {
    console.error(error)
  }

  return reply.status(201).send()
}
