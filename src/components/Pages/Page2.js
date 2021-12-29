import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../Layout';

const Page2 = () => {
  return (
    <Layout>
      <Header as="h2">Page 2</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default Page2;
