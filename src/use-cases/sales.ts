import { ISalesRepository } from '@/repositories/i-sales'

interface SalesUseCaseRequest {
  product_id: string[]
  client_id?: string
  bag_id?: string
}

export class SalesUseCase {
  constructor(private salesRepository: ISalesRepository) {
    this.salesRepository = salesRepository
  }

  async execute(data: SalesUseCaseRequest) {
    // Nesta parte estou montando uma lógica autoincremental para que cada linha de uma mesma transação tenha o mesmo sale_id
    const lastSaleId = await this.salesRepository.getLastSaleId()
    const newLastSaleId = lastSaleId ? lastSaleId + 1n : 1n

    // Cada produto de uma transação é registrado na tabela de Sales
    for (const product of data.product_id) {
      await this.salesRepository.insert({
        sale_id: newLastSaleId,
        product_id: product,
        client_id: data.client_id,
        bag_id: data.bag_id,
      })
    }
  }
}
