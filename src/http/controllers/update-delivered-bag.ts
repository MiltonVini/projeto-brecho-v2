import { PrismaBagRepository } from '@/repositories/prisma/bag-repository'
import { UpdateDeliveredBag } from '@/use-cases/update-delivered-bag'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateDeliveredBag(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateDeliveredBagParamsSchema = z.object({
    bag_id: z.string(),
  })

  const { bag_id } = updateDeliveredBagParamsSchema.parse(request.query)

  try {
    const bagRepository = new PrismaBagRepository()
    const updateToDeliveredUseCase = new UpdateDeliveredBag(bagRepository)

    const updatedBag = await updateToDeliveredUseCase.execute(bag_id)

    return reply.status(200).send(updatedBag)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return reply.status(409).send({
      message: error.message,
    })
  }
}
