import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Layout } from '@/components/Layout/Layout';

function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Services />
      </>
    </Layout>
  );
}

export default Home;
