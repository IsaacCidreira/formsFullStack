import { Purchase } from '../../model/Purchase';
import { v4 as uuidV4 } from 'uuid';

import {
  ICreatePurchaseDTO,
  IPurchaseRepository,
} from '../IPurchaseRepositories';

class PurchaseRepository implements IPurchaseRepository {
  private purchase: Purchase[];

  private static INSTANCE: PurchaseRepository;

  private constructor() {
    this.purchase = [];
  }

  public static getInstance(): PurchaseRepository {
    if (!PurchaseRepository.INSTANCE) {
      PurchaseRepository.INSTANCE = new PurchaseRepository();
    }

    return PurchaseRepository.INSTANCE;
  }

  create({ sticker, quantity, note }: ICreatePurchaseDTO): void {
    const purchase = new Purchase();
    Object.assign(purchase, {
      sticker,
      quantity,
      note,
      created_at: new Date(),
    });

    this.purchase.push(purchase);
  }

  list(): Purchase[] {
    return this.purchase;
  }

  findById(id: string): Purchase {
    const purchase = this.purchase.find((contact) => contact.id === id);

    return purchase;
  }

  delete(id: string): Purchase[] {
    this.purchase = this.purchase.filter((contact) => contact.id !== id);

    return this.purchase;
  }
}

export { PurchaseRepository };
