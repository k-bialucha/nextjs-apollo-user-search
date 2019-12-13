import React, { useState } from 'react';

import { Query } from '../UsersList/UsersList';

import Button from './Button';
import Input from './Input';
import Select, { SelectOption } from './Select';
import Container from '../Card';

import { ControlsContainer } from './SearchConfigBox.styled';

const selectionOptions: SelectOption[] = [
  { value: 'login', label: 'login' },
  { value: 'name', label: 'name' },
  { value: 'email', label: 'email' },
];

interface Props {
  onSearch: (query: Query) => any;
}

const SearchConfigBox: React.FC<Props> = ({ onSearch }) => {
  const [mode, setMode] = useState<string>(null);
  const [query, setQuery] = useState<string>('');

  const handleModeChange = (mode: string) => {
    setMode(mode);
    setQuery('');
  };

  return (
    <Container title="Search">
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
            onSearch({ key: query, type: 'login' });
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
