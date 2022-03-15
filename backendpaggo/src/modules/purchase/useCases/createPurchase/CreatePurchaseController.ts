import { Request, Response } from 'express';
import { CreatePurchaseUseCase } from './CreatePurchaseUseCase';

class CreatePurchaseController {
  constructor(private createPurchaseUseCase: CreatePurchaseUseCase) {}

  handle(request: Request, response: Response) {
    let { sticker, quantity, note } = request.body;

    if (!sticker || !quantity) {
      return response.status(404).json({ error: 'Name is required' });
    }
    this.createPurchaseUseCase.execute({ sticker, quantity, note });

    return response.status(201).send();
  }
}
export { CreatePurchaseController };
