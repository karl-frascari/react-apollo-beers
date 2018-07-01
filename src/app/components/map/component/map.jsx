/* Default */
import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';

/* Custom */
import constants from '../../../../common/constants';

/* Styles */
import './map.scss';

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      params: {
        key: constants.GOOGLE_KEY
      },
      mapObject: null,
      currentLocation: null
    };
  }

  /** 
  * Method to update Google Maps tiles after the map being loaded
  */
  updateTiles() {

    const { mapObject } = this.state;

    if (!mapObject) return;

    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);

    this.centerCurrenteLocation(mapObject);
  }

  /** 
  * Get the current location and center on it, if the user allow the browser to get it
  * @param {object} mapObject - Object that represents the Google Map 
  */
  centerCurrenteLocation(mapObject) {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(position => {

        const currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        this.setState({
          currentLocation
        });

        mapObject.setCenter(currentLocation);
      });

    } else {
      alert("You browser do not support current location");
    }
  }

  /** 
  * Set the map object to state after the map being created
  * @param {object} mapObject - Object that represents the Google Map 
  */
  onMapCreated(mapObject) {
    this.setState({
      mapObject
    });
  }

  renderGoogleMaps() {

    const { params, currentLocation } = this.state;

    return (
      <Gmaps
        width='100%'
        height='100%'
        onMapCreated={this.onMapCreated.bind(this)}
        zoom={15}
        zoomControl={false}
        streetViewControl={false}
        params={params}>
        {
          currentLocation ?
            <Marker
              lat={currentLocation.lat()}
              lng={currentLocation.lng()}
            /> : null
        }
      </Gmaps>
    );
  }

  render() {

    this.updateTiles();

    return (
      <section className="mapContent">
        {this.renderGoogleMaps()}
      </section>
    );
  }
}

export default Map;