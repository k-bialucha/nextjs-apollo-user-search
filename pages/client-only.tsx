import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';

const ClientOnlyPage: React.FC<{}> = () => (
  <Layout>
    <h1>Client Only Page</h1>
    <p>Might be useful</p>
  </Layout>
);

export default withApollo(ClientOnlyPage, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: false,
});
