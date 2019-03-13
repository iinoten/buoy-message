import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import TopPage from './components/TopPage/TopPage';
import Post from './components/Post/Post';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TopPage />
    );
  }
}

export default App;
