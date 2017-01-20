import React, { Component } from 'react';
import { render } from 'react-dom';

import Body from './Body'
import About from './About'
import Footer from './Footer'
import Header from './Header'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      about: false,
      body: true
    }
  }

  handleAbout(e){
    this.setState({about: true, body: false})
  }

  render() {
    return (
        <section>
        <Header about={this.handleAbout.bind(this)} />
        {this.state.body ? <Body /> : null}
        {this.state.about && <About />}
        <Footer />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
