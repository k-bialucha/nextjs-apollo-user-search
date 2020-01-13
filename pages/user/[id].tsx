import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import UserProfile from '../../components/UserProfile';

import { withApollo } from '../../lib/apollo';

const UserPage: React.FC<{}> = () => {
  const router = useRouter();
  const login: string = router.query.id as string;

  return (
    <Layout>
      <UserProfile login={login} />
    </Layout>
  );
};

export default withApollo(UserPage);
