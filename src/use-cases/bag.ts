import { IBagRepository } from '@/repositories/i-bag-repository'

interface BagUseCaseRequest {
  bag_id: number
  client_id: string
  product_id: string
}

export class BagUseCase {
  constructor(private bagRepository: IBagRepository) {
    this.bagRepository = bagRepository
  }

  async execute(data: BagUseCaseRequest) {
    // TODO: Quando o produto entrar em uma sacolinha, ele precisa ser um produto que já foi vendido
    await this.bagRepository.create({
      bag_id: data.bag_id,
      client_id: data.client_id,
      product_id: data.product_id,
    })
  }
}
