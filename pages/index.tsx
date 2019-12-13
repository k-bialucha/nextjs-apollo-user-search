import Layout from '../components/Layout';
import SearchConfigBox from '../components/SearchConfigBox';
import UserList from '../components/UsersList/UsersList';
import { withApollo } from '../lib/apollo';

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SearchConfigBox />
    <UserList />
  </Layout>
);

export default withApollo(IndexPage);
