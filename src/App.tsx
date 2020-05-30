import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './domain/Home/Home';
import { TypeTest } from './components/TypeTest/TypeTest';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Home /> */}
        <TypeTest />
      </Switch>
    </Router>
  );
};
