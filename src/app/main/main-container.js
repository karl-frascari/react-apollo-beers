/* Default */
import { connect } from 'react-redux';

/* Custom */
import App from './main';


/* Declare mapStateToProps and mapDispatchToProps to future use. In case of scaling the aplication with custom services without GraphQL queries*/
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
