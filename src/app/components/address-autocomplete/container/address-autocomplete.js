/* Default */
import { connect } from 'react-redux';

/* Components */
import AddressAutocomplete from '../component/address-autocomplete';


/* Declare mapStateToProps and mapDispatchToProps to future use. In case of scaling the aplication with custom services without GraphQL queries*/
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(AddressAutocomplete);