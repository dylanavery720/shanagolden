import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
            <Link to='/about'><li>About</li></Link>
            <Link to='/team'><li>Our Team</li></Link>
            <Link to='/partner'><li>Partner Documents</li></Link>
            <Link to='/faq'><li>FAQ</li></Link>
          </ul>
      </nav>
    );
  }
}

export default Nav;
