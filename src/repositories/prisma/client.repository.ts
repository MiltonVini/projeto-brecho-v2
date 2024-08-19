import { Prisma } from '@prisma/client'
import { IClientRepository } from '../i-client-repository'
import { prisma } from '@/lib/prisma'

export class PrismaClientRepository implements IClientRepository {
  async create(data: Prisma.ClientsCreateInput) {
    const client = await prisma.clients.create({
      data: {
        name: data.name,
      },
    })
    return client
  }

  async findClient(name: string) {
    const client = await prisma.clients.findFirst({
      where: {
        name,
      },
    })

    return client
  }
}
