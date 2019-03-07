import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Point from './components/Points/Points';
import helloRouter from './components/Hello_router/helloRouter';
import Install from './components/Install/Install';
import Buoy from './components/Buoy/Buoy';

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
      <Buoy />
      
    );
  }
}

export default App;
