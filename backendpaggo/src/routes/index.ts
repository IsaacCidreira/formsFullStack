import { Router } from 'express';
import { purchaseRoutes } from './purchase.routes';

const router = Router();

router.use('/purchase', purchaseRoutes);

export { router };
