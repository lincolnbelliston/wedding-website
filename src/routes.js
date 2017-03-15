"use strict";
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import TravelInfo from './components/TravelInfo';
import Registry from './components/Registry';
import Faq from './components/Faq';

export default (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="travel-info" component={TravelInfo}/>
    <Route path="registry" component={Registry}/>
    <Route path="frequently-asked-questions" component={Faq}/>
  </div>
);
//
