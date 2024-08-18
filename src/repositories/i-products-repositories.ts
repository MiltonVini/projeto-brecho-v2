import { Prisma, Product } from '@prisma/client'
import { ProductUpdateInput } from './i-users-repositories'

export interface IProductRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
  update(data: ProductUpdateInput): Promise<void>
  findProduct(id: string): Promise<Product | null>
}
