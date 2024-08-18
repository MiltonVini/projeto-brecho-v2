import { IProductRepository } from '@/repositories/i-products-repositories'
import { Product, StockType } from '@prisma/client'

interface ProductUseCaseRequest {
  description: string
  price: number
  cost: number
  stock?: number
  stock_type: StockType
}

interface ProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {
    this.productRepository = productRepository
  }

  async execute(data: ProductUseCaseRequest): Promise<ProductUseCaseResponse> {
    const product = await this.productRepository.create({
      description: data.description,
      price: data.price,
      cost: data.cost,
      stock: data.stock_type === 'single' ? 1 : data.stock, // TODO: Criar uma regra para definir estoque com base no tipo de estoque
      stock_type: data.stock_type,
    })

    return {
      product,
    }
  }
}
