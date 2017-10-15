import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Scale'd Origin</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Products</a></li>
              <li><a href="badges.html">About Us</a></li>
              <li><a href="collapsible.html">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }

}

export default Header;