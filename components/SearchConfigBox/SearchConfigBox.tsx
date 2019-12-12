import React, { useState } from 'react';
import Select, { SelectOption } from './Select';

import { Card, Title } from './SearchConfigBox.styled';

const selectionOptions: SelectOption[] = [
  { value: 'login', label: 'login' },
  { value: 'name', label: 'name' },
  { value: 'email', label: 'email' },
];

const SearchConfigBox: React.FC<{}> = () => {
  const [mode, setMode] = useState<string>(null);

  return (
    <Card>
      <Title>Search</Title>
      <p>
        <Select
          value={mode}
          onChange={setMode}
          options={selectionOptions}
          placeholderText="Search by"
        />
      </p>
    </Card>
  );
};

export default SearchConfigBox;
