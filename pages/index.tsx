import Layout from '../components/Layout';
import SearchConfigBox from '../components/SearchConfigBox';
import { withApollo } from '../lib/apollo';

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SearchConfigBox />
  </Layout>
);

export default withApollo(IndexPage);
