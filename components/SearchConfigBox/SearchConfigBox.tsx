import React, { useState } from 'react';
import Select, { SelectOption } from './Select';

import { Card, ControlsContainer, Title } from './SearchConfigBox.styled';
import Input from './Input';

const selectionOptions: SelectOption[] = [
  { value: 'login', label: 'login' },
  { value: 'name', label: 'name' },
  { value: 'email', label: 'email' },
];

const SearchConfigBox: React.FC<{}> = () => {
  const [mode, setMode] = useState<string>(null);
  const [query, setQuery] = useState<string>('');

  const handleModeChange = (mode: string) => {
    setMode(mode);
    setQuery('');
  };

  return (
    <Card>
      <Title>Search</Title>
      <ControlsContainer>
        <Select
          value={mode}
          onChange={handleModeChange}
          options={selectionOptions}
          placeholderText="Search by"
        />
        <Input
          value={query}
          onChange={setQuery}
          placeholderText={mode || 'select a field...'}
        />
      </ControlsContainer>
    </Card>
  );
};

export default SearchConfigBox;
