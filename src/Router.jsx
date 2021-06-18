// node libreries
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Dashboard from './pages/dashboard_orders';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Dashboard />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
