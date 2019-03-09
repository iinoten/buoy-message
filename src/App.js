import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Post from './components/Post/Post';


class App extends Component {
  render() {
    return (
      <Post />
    );
  }
}

export default App;
