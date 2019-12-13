import React, { ChangeEvent } from 'react';

import { StyledInput } from './Input.styled';

interface Props {
  value: string;
  onChange: (value: string) => any;
  placeholderText: string;
  disabled?: boolean;
  typeEmail?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholderText,
  disabled,
  typeEmail,
}) => {
  return (
    <StyledInput
      type={typeEmail ? 'email' : 'text'}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const newValue: string = e.target.value;
        onChange(newValue);
      }}
      placeholder={placeholderText}
      disabled={disabled}
    />
  );
};

export default Input;
