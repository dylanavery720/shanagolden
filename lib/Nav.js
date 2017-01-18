import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Partner Documents</a>
          <a href="#">FAQ</a>
          {/* ADD ROUTER, CHANGE TO LINKS */}
          <input type="text" className="form-control" placeholder="Search"></input>
      </nav>
    );
  }
}

export default Nav;
