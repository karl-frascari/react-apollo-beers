/* Default*/
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

/* Custom */
import apolloClient from './apolloClient';

const reducers = combineReducers({
  apollo: apolloClient.reducer()
});

export default createStore(reducers, {},
  compose(
    applyMiddleware(apolloClient.middleware(), createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
