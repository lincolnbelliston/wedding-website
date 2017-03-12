"use strict";
// Application entrypoint.
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import App from './components/App';
//import routes from './routes';

import Home from './components/Home';
import TravelInfo from './components/TravelInfo';
import Registry from './components/Registry';
import Faq from './components/Faq';

ReactDOM.render((
  <Router>
    <div>
      <div>hello</div>
      <Route exact path="/" component={Home}/>
      <Route path="travel-info" component={TravelInfo}/>
      <Route path="registry" component={Registry}/>
      <Route path="frequently-asked-questions" component={Faq}/>
    </div>

  </Router>
), document.getElementById('app'));
