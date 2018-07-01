/* Default */
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* Custom */
import constants from '../../../../common/constants';
import helpers from '../../../../common/helpers';

/* Queries */
import fetchPlacesQuery from '../../../queries/fetchPlaces';

/* Components */
import PlacesList from '../component/places-list';


const placesListWithData = graphql(fetchPlacesQuery, {
  options: (props) => ({
    variables: {
      "algorithm": constants.DEFAULT_ALGORITHM,
      "lat": helpers.getQueryParameterFromProps(props, "lat"),
      "long": helpers.getQueryParameterFromProps(props, "long"),
      "now": new Date()
    }
  })
});


/* Declare mapStateToProps and mapDispatchToProps to future use. In case of scaling the aplication with custom services without GraphQL queries*/
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default withRouter(placesListWithData(connect(mapStateToProps, mapDispatchToProps)(PlacesList)));