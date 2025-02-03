import { Bags } from '@prisma/client'
import {
  IBagCreateInput,
  IbagFindInput,
  IBagRepository,
} from '../i-bag-repository'
import { prisma } from '@/lib/prisma'

export class PrismaBagRepository implements IBagRepository {
  async create(data: IBagCreateInput): Promise<Bags> {
    const bag = await prisma.bags.create({
      data: {
        created_at: new Date(),
        client: {
          connect: { id: data.client_id },
        },
      },
    })

    return bag
  }

  async findActiveBagById(id: string) {
    const bag = await prisma.bags.findFirst({
      where: {
        client_id: id,
        is_delivered: false,
      },
    })

    return bag
  }

  async updateToDelivered(id: string) {
    const bag = await prisma.bags.update({
      where: {
        id,
      },
      data: {
        is_delivered: true,
        delivered_at: new Date(),
      },
    })

    return bag
  }

  async findAll(data: IbagFindInput) {
    const bags = await prisma.bags.findMany({
      where: {
        is_delivered: data.is_delivered,
      },
    })

    return bags
  }
}
