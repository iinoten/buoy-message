import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import firebase from './Firebase.js';

import TopPage from './components/TopPage/TopPage';
import Post from './components/Post/Post';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={'/'} component={TopPage} />
            <Route path={'/send'} component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
