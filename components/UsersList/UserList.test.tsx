import React from 'react';
import { shallow } from 'enzyme';

import * as ApolloHooks from '@apollo/react-hooks';

import UsersList from './UsersList';

import UserCard from './UserCard';

jest.spyOn(ApolloHooks, 'useQuery').mockImplementation(jest.fn());
const useQueryMock = ApolloHooks.useQuery as jest.Mock;

const logins: string[] = ['some-login', 'fancy-login'];

const fakeData = {
  search: {
    edges: [
      {
        node: {
          login: logins[0],
          email: 'adam.french@cpanel.net',
          __typename: 'User',
        },
        __typename: 'SearchResultItemEdge',
      },
      {
        node: { login: logins[1], email: '', __typename: 'User' },
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

  it('passes user login to the UserCard item', () => {
    useQueryMock.mockReturnValue({ data: fakeData });

    const wrapper = shallow(
      <UsersList query={{ key: 'fake-query', type: 'login' }} />
    );

    const userItems = wrapper.find(UserCard);

    userItems.forEach((userItem, index) => {
      const itemNameProp = userItem.prop('name');

      expect(itemNameProp).toBe(logins[index]);
    });
  });

  it('does not crash on malformed query data', () => {
    useQueryMock.mockReturnValue({ data: { unhappy: 'path' } });

    const wrapper = shallow(
      <UsersList query={{ key: 'fake-query', type: 'login' }} />
    );

    const userItems = wrapper.find(UserCard);

    expect(userItems.length).toBe(0);
  });

  it('renders a hint paragraph with query when query key specified', () => {
    useQueryMock.mockReturnValue({ data: fakeData });
    const someQueryKey: string = 'some-query';

    const wrapper = shallow(
      <UsersList query={{ key: someQueryKey, type: 'login' }} />
    );

    const paragraph = wrapper.find('p');

    const paragraphText = paragraph.text();

    const textContainsFragment = paragraphText.includes('Results for query:');
    const textContainsQueryKey = paragraphText.includes(someQueryKey);

    expect(textContainsFragment).toBe(true);
    expect(textContainsQueryKey).toBe(true);
  });

  it('renders a hint paragraph when query key not specified', () => {
    useQueryMock.mockReturnValue({ data: fakeData });
    const someQueryKey: string = ''; // might be also null

    const wrapper = shallow(
      <UsersList query={{ key: someQueryKey, type: 'login' }} />
    );

    const paragraph = wrapper.find('p');

    const paragraphText = paragraph.text();

    expect(paragraphText).toBe(
      'Type a query in the box above to see some results.'
    );
  });
});
