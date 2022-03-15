import { Request, Response } from 'express';
import { DeletePurchaseUseCase } from './DeletePurchaseUseCase';

class DeletePurchaseController {
  constructor(private deletepurchaseUseCase: DeletePurchaseUseCase) {}

  handle(request: Request, response: Response) {
    const { id } = request.params;

    this.deletepurchaseUseCase.execute(id);

    return response.status(201).send();
  }
}
export { DeletePurchaseController };
