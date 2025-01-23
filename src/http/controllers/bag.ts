import { PrismaBagRepository } from '@/repositories/prisma/bag-repository'
import { BagUseCase } from '@/use-cases/bag'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createBag(request: FastifyRequest, reply: FastifyReply) {
  const createBagBodySchema = z.object({
    bag_id: z.number(),
    client_id: z.string(),
    product_id: z.string(),
  })

  const data = createBagBodySchema.parse(request.body)

  try {
    const bagRepository = new PrismaBagRepository()
    const bagUsecase = new BagUseCase(bagRepository)

    await bagUsecase.execute(data)
  } catch (error) {
    console.error(error)
  }

  return reply.status(201).send()
}
