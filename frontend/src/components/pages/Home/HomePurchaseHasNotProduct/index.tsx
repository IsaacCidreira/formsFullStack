import { Link } from 'react-router-dom';
import { ButtonContainer } from '../../../Button/style';
import { Container } from './style';

const HomePurchaseHasNotProduct = () => {
  return (
    <Container>
      <h2>Olá, você não possui produtos no momento.</h2>
      <h3>Deseja adicionar item?</h3>
      <Link to="/newpurchase">
        <ButtonContainer>Comprar novo produto</ButtonContainer>
      </Link>
    </Container>
  );
};

export default HomePurchaseHasNotProduct;
