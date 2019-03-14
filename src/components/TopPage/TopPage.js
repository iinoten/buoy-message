import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Level from '../Level/Level';
import './TopPage.css'

class TopPage extends Component{
  render(){
    return(
      <div>
        <Level />
      </div>
    );
  }
}

export default TopPage;