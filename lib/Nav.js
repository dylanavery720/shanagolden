import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href="#" onClick={this.props.about}>About</a>
          <a href="#">Our Team</a>
          <a href="#">Partner Documents</a>
          <a href="#">FAQ</a>
          {/* ADD ROUTER, CHANGE TO LINKS */}
          <div className="search"><input type="text" className="form-control" placeholder="Search"></input></div>
      </nav>
    );
  }
}

export default Nav;
