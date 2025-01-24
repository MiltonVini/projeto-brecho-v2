import { IBagRepository } from '@/repositories/i-bag-repository'

export interface inserProductsInBagRequest {
  client_id: string
  product_list: string[]
}

export class InsertProductsInBagUseCase {
  constructor(private bagRepository: IBagRepository) {
    this.bagRepository = bagRepository
  }

  async execute(data: inserProductsInBagRequest) {
    const clientActiveBag = await this.bagRepository.findActiveBagById(
      data.client_id,
    )

    if (clientActiveBag) {
      for (const product of data.product_list) {
        await this.bagRepository.create({
          bag_id: clientActiveBag?.bag_id,
          client_id: data.client_id,
          product_id: product,
        })
      }
    }
  }
}
