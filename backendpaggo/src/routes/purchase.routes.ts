import { Router } from 'express';
import { createPurchaseController } from '../modules/purchase/useCases/createPurchase';
import { deletePurchaseController } from '../modules/purchase/useCases/deletePurchase';
import { listPurchaseController } from '../modules/purchase/useCases/listPurchase';

const purchaseRoutes = Router();

purchaseRoutes.post('/', (request, response) => {
  return createPurchaseController.handle(request, response);
});

purchaseRoutes.get('/', (request, response) => {
  return listPurchaseController.handle(request, response);
});

purchaseRoutes.delete('/:id', (request, response) => {
  return deletePurchaseController.handle(request, response);
});

export { purchaseRoutes };
