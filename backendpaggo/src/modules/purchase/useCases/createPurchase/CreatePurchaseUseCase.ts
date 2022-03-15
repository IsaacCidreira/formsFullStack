import { PurchaseRepository } from '../../repositories/implementation/PurchaseRepository';

interface IRequestPurchase {
  sticker: string;
  quantity: string;
  note: string;
}

class CreatePurchaseUseCase {
  constructor(private purchaseRepository: PurchaseRepository) {}

  execute({ sticker, quantity, note }: IRequestPurchase): void {
    this.purchaseRepository.create({ sticker, quantity, note });
  }
}

export { CreatePurchaseUseCase };
