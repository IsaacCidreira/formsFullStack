import { useCallback, useEffect, useState } from 'react';
import PurchaseService from '../../services/PurchaseService';
import HomePurchaseHasNotProduct from './HomePurchaseHasNotProduct';
import HomePurchaseProduct from './HomePurchaseProduct';
import { Container } from './style';

interface PurchaseItem {
  sticker: string;
  quantity: string;
  note: string;
}
const Home = () => {
  const [purchase, setPurchase] = useState<PurchaseItem[]>([]);

  const loadPurchase = useCallback(async () => {
    try {
      const purchaseList = await PurchaseService.listPurchase();
      setPurchase(purchaseList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadPurchase();
  }, [loadPurchase]);
  console.log(purchase);

  return (
    <Container>
      {purchase.length > 0 ? (
        <HomePurchaseProduct purchase={purchase} />
      ) : (
        <HomePurchaseHasNotProduct />
      )}
    </Container>
  );
};

export default Home;
