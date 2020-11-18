import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/products/:product+" component={Product} />
  </Switch>
);

export default Routes;
