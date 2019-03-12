import React, {Component} from 'react';
//import {TransitionGroup, CSSTransition} from 'react-transition-group';
import posed from 'react-pose'

import Buoy from '../Buoy/Buoy';
import './Post.css'
import firebase from '../../Firebase.js';

var db = firebase.firestore();
class Post extends Component{
  constructor() {
    super();
    
    this.state = {
      position: {
        x: null,
        y: null
      },
      isVisible: false
    }
    navigator.geolocation.watchPosition(this.get_position);
  }
  componentDidMount() {
    navigator.geolocation.watchPosition(this.get_position);
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }
  get_position = (position) => {
    console.log(position.coords)
    this.setState({
      position: {
        x: Math.round(position.coords.latitude * 100000),
        y: Math.round(position.coords.longitude * 100000)
      }
    })
  }
  post_to_db = ( message ) => {
    db.collection('buoys').add({
      message: message,
      position: {
        latitude: this.state.position.x,
        longitude: this.state.position.y
      },
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  render(){
    return(
      <div>
          <Buoy send_data={this.post_to_db}/>
      </div>

    );
  }
}

export default Post;