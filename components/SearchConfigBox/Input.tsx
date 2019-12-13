import React, { ChangeEvent } from 'react';

import { StyledInput } from './Input.styled';

interface Props {
  value: string;
  onChange: (value: string) => any;
  placeholderText: string;
}

const Input: React.FC<Props> = ({ value, onChange, placeholderText }) => {
  return (
    <StyledInput
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const newValue: string = e.target.value;
        onChange(newValue);
      }}
      placeholder={placeholderText}
    />
  );
};

export default Input;
