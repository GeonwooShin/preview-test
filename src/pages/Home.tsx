import Calendar from '@components/Calendar';
import Layout from '@components/common/Layout';
import Loader from '@components/common/Loader';
import { Suspense, memo } from 'react';

const Home = memo(() => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Calendar />
      </Suspense>
    </Layout>
  );
});
export default Home;
