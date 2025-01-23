import { Clients, Prisma } from '@prisma/client'

export interface IClientRepository {
  create(data: Prisma.ClientsCreateInput): Promise<Clients>
  findClient(name: string): Promise<Clients | null>
}
