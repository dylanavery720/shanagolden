import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer>
      <h2>Resources</h2>
      <a href="http://www.argentum.org/alfa/default.asp"><img className='footer-pic' src="lib/image-files/argentum.png"/></a>
      <a href="https://www.ahcancal.org/Pages/Default.aspx"><img className='footer-pic' src="lib/image-files/ahca.jpg"/></a>
      <a href="http://www.seniorliving.org/leisure/top-senior-websites/"><img className='footer-pic' src="lib/image-files/sal.jpg"/></a>
    </footer>
    );
  }
}

export default Footer;
