import { PrismaBagRepository } from '@/repositories/prisma/bag-repository'
import { GetBagsUseCase } from '@/use-cases/get-bags'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getBags(request: FastifyRequest, reply: FastifyReply) {
  const getBagsParamsSchema = z.object({
    is_delivered: z.boolean().optional(),
  })

  const { is_delivered } = getBagsParamsSchema.parse(request.params)

  const data = {
    is_delivered,
  }

  try {
    const bagsRepository = new PrismaBagRepository()
    const getBagsUseCase = new GetBagsUseCase(bagsRepository)

    const bags = await getBagsUseCase.execute(data)

    return reply.status(200).send(bags)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return reply.status(409).send({
      message: error.message,
    })
  }
}
