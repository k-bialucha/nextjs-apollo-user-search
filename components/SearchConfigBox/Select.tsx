import React from 'react';

import { StyledSelect } from './Select.styled';

export interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  placeholderText: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => any;
}

const Select: React.FC<Props> = ({
  options,
  value,
  onChange,
  placeholderText,
}) => {
  return (
    <StyledSelect
      value={value || ''}
      onChange={e => {
        const newValue: string = e.target.value;
        onChange(newValue);
      }}
    >
      <option value="" disabled>
        {placeholderText}
      </option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
