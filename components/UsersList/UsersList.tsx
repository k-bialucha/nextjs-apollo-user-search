import React from 'react';

import UserCard from './UserCard';
import Card from '../Card';

interface User {
  name: string;
}

const users: User[] = [
  { name: 'some-user-11' },
  { name: 'super-user' },
  { name: 'some-user-9' },
  { name: 'fancy-user-39' },
  { name: 'fancy-user-4' },
];

const UsersList: React.FC<{}> = () => {
  return (
    <Card title="Users">
      {users.map((user: User) => (
        <UserCard key={user.name} name={user.name} />
      ))}
    </Card>
  );
};

export default UsersList;
