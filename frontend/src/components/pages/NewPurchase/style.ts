import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSeundary};
  width: 560px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  h2 {
    color: ${({ theme }) => theme.colors.secundary};
    margin-bottom: 32px;
  }

  button {
    letter-spacing: 1.3px;
    height: 52px;
    padding: 0 16px;
    border: none;
    background: ${({ theme }) => theme.colors.secundary};
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color: #fff;
    margin-top: 18px;
    border-radius: 4px;
    transition: background all 0.2s ease-in;
    &:hover {
      background: ${({ theme }) => theme.colors.textPrimary};
      color: ${({ theme }) => theme.colors.secundary};
    }

    &[disabled] {
      background: ${({ theme }) => theme.colors.textSecunday};
      cursor: default;
    }
  }
`;

export const Back = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: bold;
    }
    img {
      position: relative;
      top: -3px;
      margin-right: 18px;
      transform: rotate(-90deg);
    }
  }
`;
export const CheckBoxItens = styled.div``;

export const QuantityBox = styled.div`
  display: flex;
  flex-direction: row !important;
  input {
    width: 40px;
    padding: 8px 10px;
    border-radius: 4px;
    border: none;
    margin: 0px 10px;

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      text-align: center;
    }
    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
      text-align: center;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 40px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.secundary};
    font-size: 30px;
    text-align: center;
  }
`;

export const CheckedContainer = styled.div`
  h3 {
    margin-bottom: 12px;
    margin-top: 12px;
  }
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textPrimary};
  div {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    height: 150px;
    resize: none;
    padding: 10px;
    border: none;

    &:focus {
      border: none;
      outline: 2px solid ${({ theme }) => theme.colors.secundary};
    }
  }
`;
