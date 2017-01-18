import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
      <header>
      	<img src='lib/image-files/shanagoldenlogo.png' alt='Shanagolden Management Logo' id='logo' />
        {/* <h1>Shanagolden Management, LLC</h1>
      	<p>“Where Care is both an Art and a Science.”</p> */}
        <Nav />
      </header>
    );
  }
}

export default Header;
