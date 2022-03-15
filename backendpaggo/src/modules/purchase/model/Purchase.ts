import { v4 as uuidV4 } from 'uuid';

class Purchase {
  id: string;
  sticker: string;
  quantity: string;
  note: string;
  created_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Purchase };
