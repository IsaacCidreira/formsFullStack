import { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormsGroup from '../../FormsGroup';
import PurchaseService from '../../services/PurchaseService';
import arrow from '../../assets/images/arrow.svg';
import {
  Back,
  CheckBoxItens,
  CheckedContainer,
  Container,
  Form,
  QuantityBox,
} from './style';

const NewPurchase = () => {
  const [sticker, setSticker] = useState<Array<ReactNode>>([]);
  const [quantity, setQuantity] = useState<string | number>(0);
  const [text, setText] = useState<string>('');

  const isFormValid = sticker && quantity;

  if (quantity < 0) {
    setQuantity(0);
  }

  let navigate = useNavigate();

  function handleChangeCheckBox({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setSticker([...sticker, target.value]);
    } else {
      setSticker((prevState) =>
        prevState.filter((sticker) => sticker !== target.value),
      );
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      PurchaseService.postPurchase(sticker.join(','), String(quantity), text);
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/');
    }
  }

  function handleChangeTextArea({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(target.value);
  }

  function handleChangeQuantity({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(target.value);
  }

  function handleRemoveQuantity() {
    if (quantity !== 0) {
      setQuantity((prevstate) => Number(prevstate) - 1);
    }
  }

  function handleAddQuantity() {
    setQuantity((prevstate) => Number(prevstate) + 1);
  }

  console.log(sticker);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Back>
          <Link to="/">
            <img src={arrow} alt="Voltar" />
            <span>Voltar</span>
          </Link>
        </Back>

        <h2>Fórmulário para compra de Pacote de Adesivos</h2>
        <CheckedContainer>
          <CheckBoxItens>
            <FormsGroup>
              <h3>Quais adesivos:</h3>
              <label>
                <input
                  type="checkbox"
                  onChange={handleChangeCheckBox}
                  value="react"
                  checked={sticker.includes('react')}
                />
                React
              </label>
              <label>
                <input
                  type="checkbox"
                  value="vue"
                  onChange={handleChangeCheckBox}
                  checked={sticker.includes('vue')}
                />
                Vue
              </label>
              <label>
                <input
                  type="checkbox"
                  value="angular"
                  onChange={handleChangeCheckBox}
                  checked={sticker.includes('angular')}
                />
                Angular
              </label>
            </FormsGroup>
          </CheckBoxItens>
          <FormsGroup>
            <h3>Quantos adesivos de cada?</h3>
            <QuantityBox>
              <div onClick={handleRemoveQuantity}>-</div>{' '}
              <input
                type="number"
                value={quantity}
                onChange={handleChangeQuantity}
              />
              <div onClick={handleAddQuantity}>+</div>
            </QuantityBox>
          </FormsGroup>

          <FormsGroup>
            <h3>Observação:</h3>
            <textarea value={text} onChange={handleChangeTextArea}></textarea>
          </FormsGroup>
        </CheckedContainer>
        <button disabled={!isFormValid} type="submit">
          Enviar
        </button>
      </Form>
    </Container>
  );
};

export default NewPurchase;
