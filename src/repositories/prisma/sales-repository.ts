import { ISalesCreateInput, ISalesRepository } from '../i-sales-repository'
import { prisma } from '@/lib/prisma'

export class PrismaSalesRepository implements ISalesRepository {
  async insert(data: ISalesCreateInput) {
    const sale = await prisma.sales.create({
      data: {
        sale_id: data.sale_id,
        transaction_date: new Date(),
        client_id: data.client_id,
        bag_id: data.bag_id,
        product: {
          connect: { id: data.product_id },
        },
      },
    })

    return sale
  }

  async getLastSaleId() {
    const lastSale = await prisma.sales.findFirst({
      orderBy: {
        sale_id: 'desc',
      },
    })
    return lastSale?.sale_id || null
  }
}
