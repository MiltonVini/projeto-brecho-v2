import { Prisma } from '@prisma/client'
import { IUsersRepository } from '../i-users-repositories'
import { prisma } from '../../lib/prisma'

export class PrismaUsersRepository implements IUsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
      },
    })
    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    return user
  }
}
