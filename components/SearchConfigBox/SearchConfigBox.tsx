import React, { useState } from 'react';
import Select, { SelectOption } from './Select';

import Button from './Button';
import Input from './Input';
import Container from '../Card';
import { ControlsContainer } from './SearchConfigBox.styled';

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
    <Container title="Searcherr">
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
          typeEmail={mode === 'email'}
          disabled={!mode}
        />
        <Button
          onClick={() => {
            alert('button clicked!');
          }}
          disabled={!query || !query.length}
        >
          Search
        </Button>
      </ControlsContainer>
    </Container>
  );
};

export default SearchConfigBox;
