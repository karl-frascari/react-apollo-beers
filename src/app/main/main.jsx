/* Default */
import React from 'react';
import PropTypes from 'prop-types';

/* Custom */
import Header from '../components/header';
import Footer from '../components/footer';

/* Styles */
import './main.scss';


class App extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {

    const { children } = this.props;

    return (
      <section className="container">
        <Header />
        <div className="content">
          {React.cloneElement(children)}
        </div>
        <Footer />
      </section>
    )
  }
}

export default App;
