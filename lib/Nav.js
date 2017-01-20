import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href="#" onClick={this.props.about}>About</a>
          <a href="#" onClick={this.props.team}>Our Team</a>
          <a href="#" onClick={this.props.partner}>Partner Documents</a>
          <a href="#" onClick={this.props.faq}>FAQ</a>
          {/* ADD ROUTER, CHANGE TO LINKS */}
          <div className="search"><input type="text" className="form-control" placeholder="Search"></input></div>
      </nav>
    );
  }
}

export default Nav;
