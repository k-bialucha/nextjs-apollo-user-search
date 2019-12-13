import { useState } from 'react';
import Layout from '../components/Layout';
import SearchConfigBox from '../components/SearchConfigBox';
import UserList, { Query } from '../components/UsersList/UsersList';
import { withApollo } from '../lib/apollo';

const IndexPage: React.FC<{}> = () => {
  const [query, setQuery] = useState<Query>({ key: '', type: null });
  return (
    <Layout>
      <SearchConfigBox onSearch={setQuery} />
      <UserList query={query} />
    </Layout>
  );
};

export default withApollo(IndexPage);
