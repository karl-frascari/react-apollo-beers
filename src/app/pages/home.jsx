/* Default */
import React from 'react';

/* Custom */
import AddressAutocomplete from '../components/address-autocomplete';
import Map from '../components/map';


class HomePage extends React.Component {
    
    render() {
        return (
            <section className="container">
                <AddressAutocomplete />
                <Map />
            </section>
        )
    }
}

export default HomePage;