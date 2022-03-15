import { Link } from 'react-router-dom';
import { ButtonContainer } from '../../../Button/style';
import PurchaseService from '../../../services/PurchaseService';
import { BoxItem, ButtonRemove, Container, InfoPurchase } from './style';
interface PurchaseItem {
  id: string;
  sticker: string;
  quantity: string;
  note: string;
}
const HomePurchaseProduct = ({ purchase }: any): any => {
  function handleDelete(id: string): any {
    try {
      PurchaseService.deletePurchase(id);
    } catch (error) {
      console.log(error);
    } finally {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }
  if (purchase)
    return (
      <Container>
        <h2>
          Olá, você tem {purchase.length}{' '}
          {purchase.length > 1 ? 'produtos pendentes' : 'produto pendente'} :
        </h2>
        {purchase.map((item: PurchaseItem) => (
          <BoxItem>
            <InfoPurchase>
              <p>Tipo de adesivo escolhido:</p>
              <p>{item.sticker}</p>
            </InfoPurchase>
            <InfoPurchase>
              <p>Quantidade pedida:</p>
              <p>{item.quantity}</p>
            </InfoPurchase>
            <InfoPurchase>
              <p>Observação:</p>
              <p>{item.note}</p>
            </InfoPurchase>
            <ButtonRemove
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Deletar
            </ButtonRemove>
          </BoxItem>
        ))}
        <Link to="/newpurchase">
          <ButtonContainer>Continuar Comprando</ButtonContainer>
        </Link>
      </Container>
    );
  else return null;
};

export default HomePurchaseProduct;
