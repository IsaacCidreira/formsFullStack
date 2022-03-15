import { PurchaseRepository } from '../../repositories/implementation/PurchaseRepository';
import { DeletePurchaseController } from './DeletePurchaseController';
import { DeletePurchaseUseCase } from './DeletePurchaseUseCase';

const purchaseRepository = PurchaseRepository.getInstance();
const deletePurchaseUseCase = new DeletePurchaseUseCase(purchaseRepository);
const deletePurchaseController = new DeletePurchaseController(
  deletePurchaseUseCase,
);

export { deletePurchaseController };
