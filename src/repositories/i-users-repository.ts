import { Prisma, User } from '@prisma/client'

export interface ProductUpdateInput {
  description: string
  price: number
  cost: number
  updated_at: Date
}

export interface IUsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
