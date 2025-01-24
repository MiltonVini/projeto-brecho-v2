import { Bag } from '@prisma/client'
import { IBagCreateInput, IBagRepository } from '../i-bag-repository'
import { prisma } from '@/lib/prisma'

export class PrismaBagRepository implements IBagRepository {
  async create(data: IBagCreateInput): Promise<Bag> {
    const bag = await prisma.bag.create({
      data: {
        bag_id: data.bag_id,
        created_at: new Date(),
        client: {
          connect: { id: data.client_id },
        },
        product: {
          connect: { id: data.product_id },
        },
      },
    })

    return bag
  }

  async findActiveBagById(id: string) {
    const bag = await prisma.bag.findFirst({
      where: {
        client_id: id,
        is_delivered: false,
      },
    })

    return bag
  }

  async getLastBagId() {
    const lastBag = await prisma.bag.findFirst({
      orderBy: {
        bag_id: 'desc',
      },
    })

    return lastBag?.bag_id || null
  }

  async update(data: IBagCreateInput) {
    const bag = await prisma.bag.create({
      data: {
        bag_id: data.bag_id,
        created_at: new Date(),
        client: {
          connect: { id: data.client_id },
        },
        product: {
          connect: { id: data.product_id },
        },
      },
    })

    return bag
  }
}
