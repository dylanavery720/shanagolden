import React, { Component } from 'react';
import Nav from './Nav';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/'><img src='lib/image-files/shanagoldenlogo.png'
        alt='Shanagolden Management Logo' id='logo' /></Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
