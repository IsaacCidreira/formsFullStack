import { PurchaseRepository } from '../../repositories/implementation/PurchaseRepository';

class DeletePurchaseUseCase {
  constructor(private purchaseRepository: PurchaseRepository) {}

  execute(id: string) {
    this.purchaseRepository.delete(id);
  }
}

export { DeletePurchaseUseCase };
