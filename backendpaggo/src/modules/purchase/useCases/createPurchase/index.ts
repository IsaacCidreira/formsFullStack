import { PurchaseRepository } from '../../repositories/implementation/PurchaseRepository';
import { CreatePurchaseController } from './CreatePurchaseController';
import { CreatePurchaseUseCase } from './CreatePurchaseUseCase';

const purchaseRepository = PurchaseRepository.getInstance();
const createPurchaseUseCase = new CreatePurchaseUseCase(purchaseRepository);
const createPurchaseController = new CreatePurchaseController(
  createPurchaseUseCase,
);

export { createPurchaseController };
