import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import UserProfile from '../../components/UserProfile';
// import { withApollo } from '../../lib/apollo';

const UserPage: React.FC<{}> = () => {
  const router = useRouter();
  const login: string = router.query.id as string;
  console.warn('router', router);
  return (
    <Layout>
      <UserProfile login={login} />
    </Layout>
  );
};

// TODO: use Apollo
// export default withApollo(UserPage);
export default UserPage;
