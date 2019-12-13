import React from 'react';
import Card from '../Card';

interface Props {
  login: string;
}

const UserProfile: React.FC<Props> = ({ login }) => {
  return (
    <Card title={`${login} GitHub profile`}>
      <p>User data placeholder</p>
    </Card>
  );
};

export default UserProfile;
