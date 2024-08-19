import { Prisma, Product, StockType } from '@prisma/client'
import { ProductUpdateInput } from './i-users-repository'

export interface IProductRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
  update(data: ProductUpdateInput): Promise<void>
  findProduct(id: string): Promise<Product | null>
  updateToSold(id: string): Promise<void>
  findProductStockType(id: string): Promise<StockType | null>
}
