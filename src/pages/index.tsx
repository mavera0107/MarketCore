import * as React from 'react';

import Hero from '@/components/Homepage/Hero';
import WeAreSafe from '@/components/Homepage/WeAreSafe';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import GameGrid from '@/components/Homepage/GameGrid';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Seo
          templateTitle='Trusted Marketplace for In-Game Items'
        />
        <Hero />
        <GameGrid />
        <WeAreSafe />
      </Layout>
    </>
  );
}
