import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
      <header>
      	<img src='lib/image-files/shanagoldenlogo.png' alt='Shanagolden Management Logo' id='logo' />
        <Nav about={this.props.about} />
      </header>
    );
  }
}

export default Header;
