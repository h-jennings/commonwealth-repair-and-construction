import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Layout } from '@/components/Layout/Layout';
import { Team } from './components/Team/Team';

function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Services />
        <Team />
      </>
    </Layout>
  );
}

export default Home;
