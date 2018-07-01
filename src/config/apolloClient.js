/* Default */
import ApolloClient, { createNetworkInterface } from 'apollo-client';

/* Custom */
import constants from '../common/constants';


const networkInterface = createNetworkInterface({
  uri: constants.GRAPHQL_SERVER
});

export default new ApolloClient({ networkInterface });
