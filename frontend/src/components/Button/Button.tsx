import React, { ReactNode } from 'react';
import { ButtonContainer } from './style';
const Button = (children: ReactNode) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
