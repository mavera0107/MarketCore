import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Shop from '@/components/Shop/Shop';

const shop = () => {
  return (
    <>
      <Layout>
        <Seo templateTitle='Trusted Marketplace for In-Game Items' />
        <Shop />
      </Layout>
    </>
  );
};

export default shop;
