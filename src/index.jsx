/* Default */
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import React from 'react';

/* Custom */
import apolloClient from './config/apolloClient';
import Router from './config/router';
import store from './config/store';


ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <Router />
  </ApolloProvider>,
  document.getElementById('app'),
);

