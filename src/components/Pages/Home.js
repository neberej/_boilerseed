import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Layout from '../Layout';

const Home = () => {
  return (
    <Layout>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Link to="/page1">Page1</Link>
            <br/>
            <Link to="/dynamic">Page2</Link>
          </Grid.Column>
          <Grid.Column>
            Welcome there!
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;
