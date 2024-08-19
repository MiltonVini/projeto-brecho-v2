import { PrismaClientRepository } from '@/repositories/prisma/client.repository'
import { ClientAlreadyExists } from '@/use-cases/errors/client-already-exists'
import { RegisterClientUseCase } from '@/use-cases/register-client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerClient(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerClientBodySchema = z.object({
    name: z.string().min(3),
  })

  const { name } = registerClientBodySchema.parse(request.body)

  try {
    const clientRepository = new PrismaClientRepository()
    const registerClientUseCase = new RegisterClientUseCase(clientRepository)

    await registerClientUseCase.execute({ name })
  } catch (error) {
    if (error instanceof ClientAlreadyExists) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }

  return reply.status(201).send()
}
