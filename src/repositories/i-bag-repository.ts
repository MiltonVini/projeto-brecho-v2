import { Bag } from '@prisma/client'

export interface IBagCreateInput {
  bag_id: number
  client_id: string
  product_id: string
}

export interface IBagRepository {
  create(data: IBagCreateInput): Promise<Bag>
  getLastBagId(): Promise<number | null>
}
