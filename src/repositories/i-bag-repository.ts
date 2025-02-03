import { Bags } from '@prisma/client'

export interface IBagCreateInput {
  client_id: string
}

export interface IbagFindInput {
  is_delivered?: boolean
}

export interface IBagRepository {
  create(data: IBagCreateInput): Promise<Bags>
  findActiveBagById(id: string): Promise<Bags | null>
  updateToDelivered(id: string): Promise<Bags>
  findAll(data: IbagFindInput): Promise<Bags[]>
}
