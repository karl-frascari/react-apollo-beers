/* Default */
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';

/* Components */
import App from '../app/main/main-container';
import ResultsPage from '../app/pages/results';
import HomePage from '../app/pages/home';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="results" component={ResultsPage} />
    </Route>
  </Router>
);
