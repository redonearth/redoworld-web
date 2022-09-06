import type { NextPage } from 'next';
import Layout from '@components/layout';
import Head from 'next/head';
import Hero from '@components/home/hero';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>레도 월드</title>
        <meta name="description" content="잘 하는 프론트엔드 개발자가 되자." />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
