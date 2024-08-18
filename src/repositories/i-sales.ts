import { Sales } from '@prisma/client'

export interface ISalesCreateInput {
  sale_id: bigint
  product_id: string
  client_id?: string | null
  bag_id?: string | null
}

export interface ISalesRepository {
  insert(data: ISalesCreateInput): Promise<Sales>
  getLastSaleId(): Promise<bigint | null>
}
