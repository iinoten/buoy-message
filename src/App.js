import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import firebase from './Firebase.js';

import Induction from './components/Induction/Induction';
import TopPage from './components/TopPage/TopPage';
import Post from './components/Post/Post';

class App extends Component {
  constructor() {
    super();
    this.state={
      is_mobile: true
    }
  }
  componentDidMount() {
    var getDevice = (function(){
      var ua = navigator.userAgent;
      if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
          return 'sp';
      }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
          return 'tab';
      }else{
          return 'other';
      }
    })();
    if(getDevice === 'other') {
      this.setState({ is_mobile: false })
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={this.state.is_mobile ? "/" : "outside"} component={TopPage} />
            <Route path={'/send'} component={Post} />
            <Route path={this.state.is_mobile ? "outside" : "/"} component={Induction} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
