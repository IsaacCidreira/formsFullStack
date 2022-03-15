import { HttpClient } from './utils/HttpClient';

class PurchaseService {
  private httpClient: InstanceType<new (...args: []) => any>;
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listPurchase() {
    return this.httpClient.get('/purchase');
  }

  async postPurchase(sticker: string, quantity: string, note: string) {
    console.log(sticker);
    console.log(quantity);
    console.log(note);
    return this.httpClient.post('/purchase', {
      sticker,
      quantity,
      note,
    });
  }

  async deletePurchase(id: string) {
    return this.httpClient.delete(`/purchase/${id}`);
  }
}

export default new PurchaseService();
