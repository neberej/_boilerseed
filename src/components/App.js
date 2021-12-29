import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Pages/Home';
import Page1 from './Pages/Page1';
import Loading from './Loading';

const Page2 = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './Pages/Page2'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/dynamic" component={Page2} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
