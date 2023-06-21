import * as React from 'react';

import Hero from '@/components/Homepage/Hero';
import WeAreSafe from '@/components/Homepage/WeAreSafe';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import GameGrid from '@/components/Homepage/GameGrid';
import GameAccountGrid from '@/components/Homepage/GameAccountGrid';
import GameSlider from '@/components/Homepage/GameSlider';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Seo
          templateTitle='Trusted marketplace for in-game goods'
        />
        <GameSlider />
        <Hero />
        <GameGrid />
        <WeAreSafe />
      </Layout>
    </>
  );
}
