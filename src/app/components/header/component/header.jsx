/* Default */
import React from 'react';

/* Custom */
import logo from '../../../../assets/logo-mobile.png';

/* Styles */
import './header.scss';


class Header extends React.Component {

  renderLogo() {
    return <a href="/" className="logo"> <img src={logo} /> </a>;
  }

  renderNav() {
    return (
      <nav className="site-nav">
        <ul>
          <li className="active">
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <header className="site-header">
        {this.renderLogo()}
        {this.renderNav()}
      </header>
    )
  }
}

export default Header;
