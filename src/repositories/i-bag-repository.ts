import { Bags } from '@prisma/client'

export interface IBagCreateInput {
  client_id: string
}

export interface IBagUpdateInput {
  bag_id: string
  is_delivered: boolean
}

export interface IBagRepository {
  create(data: IBagCreateInput): Promise<Bags>
  findActiveBagById(id: string): Promise<Bags | null>
  update(data: IBagUpdateInput): Promise<Bags>
}
