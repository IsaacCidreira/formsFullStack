import { PurchaseRepository } from '../../repositories/implementation/PurchaseRepository';
import { ListPurchaseController } from './ListPurchaseController';
import { ListPurchaseUseCase } from './ListPurchaseUseCase';

const purchaseRepository = PurchaseRepository.getInstance();

const listPurchaseUseCase = new ListPurchaseUseCase(purchaseRepository);

const listPurchaseController = new ListPurchaseController(listPurchaseUseCase);

export { listPurchaseController };
