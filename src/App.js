import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

import Point from './components/Points/Points';

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
      <div className="App">
      <Point />
        Helloworld
      </div>
    );
  }
}

export default App;
