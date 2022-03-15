import { Request, Response } from 'express';
import { ListPurchaseUseCase } from './ListPurchaseUseCase';

class ListPurchaseController {
  constructor(private listPurchaseUseCase: ListPurchaseUseCase) {}

  handle(request: Request, response: Response) {
    const all = this.listPurchaseUseCase.execute();
    return response.json(all);
  }
}

export { ListPurchaseController };
