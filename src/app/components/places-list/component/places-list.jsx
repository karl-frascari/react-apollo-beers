/* Default */
import React from 'react';

/* Custom */
import helpers from '../../../../common/helpers';
import loading from "../../../../assets/loading.gif";

/* Components */
import Card from '../../product-card';

/* Styles */
import './places-list.scss';


class PlacesList extends React.Component {

  constructor(props) {
    super(props);
  }

  /** 
  * Get the first store of the request, as instructed 
  * @param {array} array - Array to get the first element
  */
  getFirstElement(array) {
    return helpers.getFirstArrayElement(array);
  }

  renderLoadingGif() {
    return <img className="loading-gif" src={loading} />;
  }

  renderPlace(place) {
    return (
      <div key={place.id} className="card-holder">
        <Card id={place.id} />
      </div>
    );
  }

  renderPlacesNotFound() {
    return <label className="not-found"> Desculpe, parece que nenhuma loja está aberta no momento.  </label>;
  }

  render() {

    const { data } = this.props;
    const place = this.getFirstElement(data.pocSearch);

    return (
      <section className="places-list">
        {
          data.loading ? this.renderLoadingGif() :
            place ? this.renderPlace(place) :
              this.renderPlacesNotFound()
        }
      </section>
    )
  }
}

export default PlacesList;
