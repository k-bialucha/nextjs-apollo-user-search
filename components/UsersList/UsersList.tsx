import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import UserCard from './UserCard';
import Card from '../Card';

import { HighlightedText } from './UserCard.styled';

export interface Query {
  type: 'login' | 'name' | 'email';
  key: string;
}

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

interface Props {
  query: Query;
}

const UsersList: React.FC<Props> = ({ query }) => {
  const { loading, error, data } = useQuery(SEARCH_USERS_QUERY, {
    variables: {
      query: query.key,
      first: 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Card title="Users">
      {!query.key && <p>Type a query in the box above to see some results.</p>}
      {query.key && (
        <p>
          Results for query: <HighlightedText>{query.key}</HighlightedText>.
        </p>
      )}
      {data?.search?.edges.map((edge: { node: UserData }) => (
        <UserCard key={edge.node.login} name={edge.node.login} />
      ))}
    </Card>
  );
};

export default UsersList;
