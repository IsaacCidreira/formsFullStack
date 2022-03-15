import { Purchase } from '../model/Purchase';

interface ICreatePurchaseDTO {
  id?: string;
  sticker: string;
  quantity: string;
  note: string;
}

interface IPurchaseRepository {
  create({ sticker, quantity, note }: ICreatePurchaseDTO): void;
  list(): Purchase[];
  findById(id: string): Purchase;
  delete(id: string): Purchase[];
}

export { ICreatePurchaseDTO, IPurchaseRepository };
