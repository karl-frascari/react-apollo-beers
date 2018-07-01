/* Default */
import React from 'react';

/* Styles */
import './footer.scss';


class Footer extends React.Component {

  renderFooterText() {
    return <label>  © 2018 Zé Delivery - Todos os direitos reservados. </label>
  }

  render() {
    return (
      <footer className="site-footer">
        {this.renderFooterText()}
      </footer>
    )
  }
}

export default Footer;
