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
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
      // スマホ・タブレット（iOS・Android）の場合の処理を記述
    }else{
      this.setState({ is_mobile: false })
      // PCの場合の処理を記述
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
