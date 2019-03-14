import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Drifting from '../Drifting/Drifting';

import './TopPage.css'

class TopPage extends Component{
  render(){
    return(
      <div><Drifting>hell</Drifting></div>
    );
  }
}

export default TopPage;