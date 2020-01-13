import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Card from '../Card';

interface User {
  login: string;
  email: string;
  following: { totalCount: number };
  followers: { totalCount: number };
}

export const GET_USER_QUERY = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      login
      email
      following {
        totalCount
      }
      followers {
        totalCount
      }
    }
  }
`;

interface Props {
  login: string;
}

const UserProfile: React.FC<Props> = ({ login }) => {
  const { loading, error, data: userData } = useQuery<{ user: User }>(
    GET_USER_QUERY,
    {
      variables: {
        login,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <Card title={`${login} GitHub profile`}>
      {loading && <p>Loading {login} data...</p>}
      {error && <p>Loading data error.</p>}
      {userData?.user && (
        <>
          <p>Username: {userData?.user.login}</p>
          <p>Email: {userData?.user.email}</p>
          <p>Following: {userData?.user?.following?.totalCount}</p>
          <p>Followers: {userData?.user?.followers?.totalCount}</p>
        </>
      )}
    </Card>
  );
};

export default UserProfile;
