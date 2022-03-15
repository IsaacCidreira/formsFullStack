import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 32px;
  }
`;

export const BoxItem = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSeundary};
  padding: 30px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 12px;
  position: relative;
`;

export const InfoPurchase = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  display: flex;
  p:nth-child(2) {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const ButtonRemove = styled.button`
  background-color: #fc5050;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 5px 10px;
  border-radius: 4px;
  position: absolute;
  right: 20px;
  top: 25px;
`;
