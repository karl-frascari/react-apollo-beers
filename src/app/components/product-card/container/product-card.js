/* Default */
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

/* Queries */
import fetchProductsQuery from '../../../queries/fetchProducts';

/* Components */
import ProductCard from '../component/product-card';


const ProductCardWithData = graphql(fetchProductsQuery, {
  options: props => ({
    variables: {
      "id": props.id,
      "search": "",
      "categoryId": 0
    }
  })
});


/* Declare mapStateToProps and mapDispatchToProps to future use. In case of scaling the aplication with custom services without GraphQL queries*/
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default ProductCardWithData(connect(mapStateToProps, mapDispatchToProps)(ProductCard));