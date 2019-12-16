import React from 'react';

import { StyledButton } from './Button.styled';

interface Props {
  disabled?: boolean;
  onClick: (...args: any[]) => any;
}

const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
