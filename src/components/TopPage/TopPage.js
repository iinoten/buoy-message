import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import './TopPage.css'

class Drifting extends Component{
  render(){
    return(
      <div id="Drifting">
        <div id="Drifting-rod" />
        <div id="Drifting-frag" />
        <div id="baloon" />
      </div>
    );
  }
}

class TopPage extends Component{
  render(){
    return(
      <div><Drifting>hell</Drifting></div>
    );
  }
}

export default TopPage;