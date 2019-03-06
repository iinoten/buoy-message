import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

import Point from './components/Points/Points';
import helloRouter from './components/Hello_router/helloRouter';
import {BrowserRouter, Route, Link} from 'react-router-dom';

firebase.initializeApp({
  apiKey: "AIzaSyDqvgfjo0TFGcec0aIDfqo-2MoQcdimKYs",
  authDomain: "buoy-message.firebaseapp.com",
  databaseURL: "https://buoy-message.firebaseio.com",
  projectId: "buoy-message",
  storageBucket: "buoy-message.appspot.com",
  messagingSenderId: "325897667671"
});
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Point} />
          <Route path='/about' component={helloRouter} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
