import { PrismaSalesRepository } from '@/repositories/prisma/sales-repository'
import { SalesUseCase } from '@/use-cases/sales'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function insertSales(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const insertSalesBodySchema = z.object({
    product_id: z.array(z.string()),
    client_id: z.string().optional(),
    bag_id: z.string().optional(),
  })

  const data = insertSalesBodySchema.parse(request.body)

  try {
    const salesRepository = new PrismaSalesRepository()
    const salesUseCase = new SalesUseCase(salesRepository)

    await salesUseCase.execute(data)
  } catch (error) {
    console.error(error)
  }

  return reply.status(201).send()
}
