import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import UserCard from './UserCard';
import Card from '../Card';

interface UserData {
  login: string;
  email: string;
}

export const SEARCH_USERS_QUERY = gql`
  query SearchUsers($query: String!, $first: Int!) {
    search(query: $query, type: USER, first: $first) {
      edges {
        node {
          ... on User {
            login
            email
          }
        }
      }
    }
  }
`;

const UsersList: React.FC<{}> = () => {
  const { loading, error, data } = useQuery(SEARCH_USERS_QUERY, {
    variables: {
      query: 'kamil',
      first: 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Card title="Users">
      {data?.search?.edges.map((edge: { node: UserData }) => (
        <UserCard key={edge.node.login} name={edge.node.login} />
      ))}
    </Card>
  );
};

export default UsersList;
