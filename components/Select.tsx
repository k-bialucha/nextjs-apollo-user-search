import React from 'react';

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
    <select
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
    </select>
  );
};

export default Select;
