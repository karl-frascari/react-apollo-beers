/* Default */
import React from 'react';

/* Custom */
import PlacesList from '../components/places-list/container/places-list';

class ResultsPage extends React.Component {

    render() {
        return (
            <section className="container">
                <PlacesList />
            </section>
        )
    }
}

export default ResultsPage;