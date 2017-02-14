import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section>
      <h1>About Us</h1>
			<p>At Shanagolden Management, owners Cindy and Robin Avery develop
        senior living communities for every level of care.
        Whether it be independent living, or complementary memory care,
        Shanagolden Management can develop properties into
        premier communities for senior living.
        With over 20 years of experience owning and operating assisted living centers,
         you can count on Shanagolden to be your ideal partner in the senior care business.
      </p>
      <h2>Mission Statement</h2>
				<p>Shanagolden Management's progressive and enlightened approach
        focuses on the Customer and the Community. We like to ask ourselves,
        "What can we do to ensure that the residents in our community
         be more engaged, active, fulfilled, and happy?"
         The three legs of the stool are, Body, Mind, and Spirit.</p>
      <h3>Creating Happiness</h3>
				<ul>
          <li className='ethics'>- Engaging our community of employees and residents, including their families;</li>
          <li className='ethics'>- Connecting with service partners, vendors and the local community;</li>
          <li className='ethics'>- Producing financial and legacy returns to investors.</li>
        </ul>
        <h3>Our Beliefs</h3>
				<ul>
          <li className='ethics'>- Sensitive Observance;</li>
          <li className='ethics'>- Honest Communication;</li>
          <li className='ethics'>- Golden-rule Ethics.</li>
        </ul>
      </section>
    );
  }
}

export default About;
