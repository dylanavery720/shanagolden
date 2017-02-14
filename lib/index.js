require('./css/reset.scss')
require('./css/main.scss')

import { Router, Route, Link,
  IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Body from './Body';
import About from './About';
import Team from './Team';
import Partner from './Partner';
import FAQ from './FAQ';

render(<Router history={browserHistory}>
  <Route path="/" component={Main} >
    <IndexRoute component={Body} />
    <Route path="/main" component={Body} />
    <Route path="/about" component={About} />
    <Route path="/team" component={Team} />
    <Route path="/partner" component={Partner} />
    <Route path="/faq" component={FAQ} />
  </Route>
</Router>, document.getElementById('application'));
