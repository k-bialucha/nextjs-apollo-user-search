import React from 'react';
import { shallow } from 'enzyme';

import * as ApolloHooks from '@apollo/react-hooks';

import UsersList from './UsersList';

import UserCard from './UserCard';

jest.spyOn(ApolloHooks, 'useQuery').mockImplementation(jest.fn());
const useQueryMock = ApolloHooks.useQuery as jest.Mock;

const fakeData = {
  search: {
    edges: [
      {
        node: {
          login: 'adam',
          email: 'adam.french@cpanel.net',
          __typename: 'User',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: { login: 'adamwathan', email: '', __typename: 'User' },
        __typename: 'SearchResultItemEdge',
      },
    ],
    __typename: 'SearchResultItemConnection',
  },
};

describe('UserList', () => {
  it('renders a list of UserCard items', () => {
    useQueryMock.mockReturnValue({ data: fakeData });

    const wrapper = shallow(
      <UsersList query={{ key: 'fake-query', type: 'login' }} />
    );

    const userItems = wrapper.find(UserCard);

    expect(userItems.length).toBe(fakeData.search.edges.length);
  });
});
