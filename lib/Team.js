import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <section>
      <h2>Our Team</h2>
				<figure><img className='team' src="lib/image-files/robinavery.jpg" alt="Robin Avery" /><figcaption><strong>Robin Avery</strong></figcaption>
				</figure>
				<figure><img className='team' src="lib/image-files/Cindy.jpg" alt="Cindy Avery" />
          <figcaption><strong>Cindy Avery</strong></figcaption>
				</figure>
				<figure><img className='team' src="lib/image-files/susie.jpg" alt="Susie Dashiell"/>
					<figcaption><strong>Susie Dashiell</strong></figcaption>
				</figure>
      </section>
    );
  }
}

export default Team;
