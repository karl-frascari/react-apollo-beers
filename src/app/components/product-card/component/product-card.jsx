/* Default */
import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import './product-card.scss';


class ProductCard extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      productsQtt: {}
    }
  }

  /** 
  * Search inside of a products array and join it by productVariants group of products
  * @param {object} productsArray - Array of products
  */
  joinProducts(productsArray) {
    return productsArray.reduce((arr, next) => arr.concat(next.productVariants), []);
  }

  /** 
  * Handle the changes for the quantity of each product to be added to the card
  * @param {id} string - Id of the product to be mapped inside the state object
  * @param {increase} boolean - Boolean to check if the handler should increase or decrease the quantity
  */
  handleProductQttChange(id, increase) {

    const { productsQtt } = this.state;

    const currQtt = productsQtt[id] || 0;
    const newQtt = increase ? currQtt + 1 : currQtt - 1;

    this.setState({
      productsQtt: {
        [id]: newQtt
      }
    });
  }

  renderProduct(product) {

    const { productsQtt } = this.state;
    const productId = product.inventoryItemId;
    const currProductQtt = productsQtt[productId];

    return (
      <div key={productId} className="card-holder">

        <label className="title">
          {product.title}
        </label>

        <div className="image-holder">
          <img src={product.imageUrl} />
        </div>

        <label className="price">
          R$ {product.price}
        </label>

        <div className="counter-holder">
          <button
            onClick={this.handleProductQttChange.bind(this, productId, true)}>
            +
          </button>

          <input value={currProductQtt || 0} />

          <button
            onClick={this.handleProductQttChange.bind(this, productId, false)}
            disabled={!currProductQtt}> 
            -
          </button>
        </div>
        
      </div>
    );
  }

  render() {

    const { data } = this.props;

    return (
      <section className="products-list">
        {
          data.poc ?
            this.joinProducts(data.poc.products).map(product => this.renderProduct(product)) :
            null
        }
      </section>
    )
  }
}

export default ProductCard;
