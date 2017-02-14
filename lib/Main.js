import React, { Component } from 'react';
import { render } from 'react-dom';

import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class Main extends React.Component {
  render() {
    return (
        <section>
        <Header />
        {this.props.children}
        <Footer />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
