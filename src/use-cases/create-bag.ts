import { IBagRepository } from '@/repositories/i-bag-repository'
import { ClientAreadyHaveActiveBag } from './errors/client-already-have-active-bag'
import { IProductRepository } from '@/repositories/i-products-repository'
import { ProductNotSold } from './errors/product-not-sold'

interface BagUseCaseRequest {
  client_id: string
  product_list: string[]
}

export class CreateBagUseCase {
  constructor(
    private bagRepository: IBagRepository,
    private productRepository: IProductRepository,
  ) {
    this.bagRepository = bagRepository
  }

  async execute(data: BagUseCaseRequest) {
    const lastBagId = await this.bagRepository.getLastBagId()
    const newBagId = lastBagId ? lastBagId + 1 : 1

    const doesClientAlreadyHaveActiveBag =
      await this.bagRepository.findActiveBagById(data.client_id)

    if (doesClientAlreadyHaveActiveBag) {
      throw new ClientAreadyHaveActiveBag()
    }

    for (const product of data.product_list) {
      // TODO: Quando o produto entrar em uma sacolinha, ele precisa ser um produto que já foi vendido
      const productInfo = await this.productRepository.findProduct(product)

      if (productInfo?.is_sold === false) {
        throw new ProductNotSold()
      }

      await this.bagRepository.create({
        bag_id: newBagId,
        client_id: data.client_id,
        product_id: product,
      })
    }
  }
}
