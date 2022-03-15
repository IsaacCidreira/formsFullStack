import { Purchase } from '../../model/Purchase';
import { PurchaseRepository } from '../../repositories/implementation/PurchaseRepository';

class ListPurchaseUseCase {
  constructor(private purchaseRepository: PurchaseRepository) {}

  execute(): Purchase[] {
    const purchase = this.purchaseRepository.list();
    return purchase;
  }
}

export { ListPurchaseUseCase };
