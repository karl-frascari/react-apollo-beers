/* Default */
import React from 'react';
import { Link } from 'react-router';

/* Custom */
import Autocomplete from 'react-google-autocomplete';

/* Style */
import "./address-autocomplete.scss";


class AddressAutocomplete extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      location: null
    }
  }

  /** 
  * Get the selected place and set the lat and long to state
  * @param {object} place - Object which represents the current location
  */
  setLocation(place) {
    this.setState({
      location: {
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng()
      }
    });
  }

  renderSearchButton(location) {
    return location ? <Link className="search-btn" to={{ pathname: '/results', query: { lat: location.lat, long: location.long } }}> Buscar </Link> : null;
  }

  renderAutocomple() {
    return (
      <Autocomplete
        onPlaceSelected={place => this.setLocation(place)}
        placeholder="Digite seu endereço"
        types={['address']}
      />
    )
  }

  render() {
    
    const { location } = this.state;

    return (
      <section className="address-autocomplete">
        {this.renderAutocomple()}
        {this.renderSearchButton(location)}
      </section>
    )
  }
}

export default AddressAutocomplete;
