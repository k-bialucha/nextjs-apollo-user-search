import Layout from '../components/Layout';

import { withApollo } from '../lib/apollo';

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <h1>Index Page</h1>
    <p>TODO</p>
  </Layout>
);

export default withApollo(IndexPage);
