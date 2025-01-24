import { PrismaBagRepository } from '@/repositories/prisma/bag-repository'
import { InsertProductsInBagUseCase } from '@/use-cases/insert-products-bag'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function insertProductsInBagUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateBagBodySchema = z.object({
    client_id: z.string(),
    product_list: z.array(z.string()),
  })

  const data = updateBagBodySchema.parse(request.body)

  try {
    const bagRepository = new PrismaBagRepository()
    const updateBagUseCase = new InsertProductsInBagUseCase(bagRepository)

    await updateBagUseCase.execute(data)

    return reply.status(201).send()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return reply.status(409).send({
      message: error.message,
    })
  }
}
