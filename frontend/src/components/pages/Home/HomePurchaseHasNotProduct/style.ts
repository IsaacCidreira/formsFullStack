import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    margin-top: 62px;
    color: ${({ theme }) => theme.colors.secundary};
  }
  h3 {
    text-align: center;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.secundary};
  }
  button {
    margin-top: 32px;
  }
`;
