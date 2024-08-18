import { Prisma, Product } from '@prisma/client'
import { IProductRepository } from '../i-products-repositories'
import { ProductUpdateInput } from '../i-users-repositories'
import { prisma } from '@/lib/prisma'

export class PrismaProductRepository implements IProductRepository {
  async create(data: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data: {
        description: data.description,
        price: data.price,
        cost: data.cost,
        stock: data.stock,
        stock_type: data.stock_type,
        created_at: new Date(),
      },
    })
    return product
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(data: ProductUpdateInput): Promise<void> {
    throw new Error('Method not implemented.')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findProduct(id: string): Promise<Product | null> {
    throw new Error('Method not implemented.')
  }
}
