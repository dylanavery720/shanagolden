import React, { Component } from 'react';
import { render } from 'react-dom';

import Footer from './Footer'
import Header from './Header'

export default class Main extends React.Component {

  render() {
    return (
        <section>
        <Header />
        {/* <Footer /> */}
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
