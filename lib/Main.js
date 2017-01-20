import React, { Component } from 'react';
import { render } from 'react-dom';

import Body from './Body'
import About from './About'
import Team from './Team'
import Faq from './FAQ'
import Partner from './Partner'
import Footer from './Footer'
import Header from './Header'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      about: false,
      body: true,
      faq: false,
      partner: false,
      team: false
    }
  }

  handleAbout(e){
    this.setState({about: true, body: false, faq: false, partner: false, team: false})
  }

  handleTeam(e){
    this.setState({team: true, about: false, body: false, partner: false, faq: false})
  }

  handlePartner(e){
    this.setState({partner: true, team: false, body: false, faq: false, about: false})
  }

  handleFAQ(e){
    this.setState({faq: true, partner: false, body: false, about: false, team: false})
  }

  render() {
    const body = this.state.body
    const about = this.state.about
    const team = this.state.team
    const partner = this.state.partner
    const faq = this.state.faq
    return (
        <section>
        <Header
        about={this.handleAbout.bind(this)}
        faq={this.handleFAQ.bind(this)}
        partner={this.handlePartner.bind(this)}
        team={this.handleTeam.bind(this)} />
        {body ? <Body /> : null}
        {about && <About />}
        {team && <Team />}
        {partner && <Partner />}
        {faq && <Faq />}
        <Footer />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
