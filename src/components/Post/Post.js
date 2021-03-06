import React, {Component} from 'react';
import posed from 'react-pose'

import Buoy from '../Buoy/Buoy';
import './Post.css'
import firebase from 'firebase';

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
  handle_to_post_page = () => {
    this.props.history.push('/');
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
    }).then(() => {
        console.log("success post date")
      }).catch((error)=>{
        console.log("failed post data:",error)
    })
  }
  render(){
    return(
      <div>
          <Buoy send_data={this.post_to_db}/>
          <div id="transition-top-page" onClick={this.handle_to_post_page}><div id="induction-message-post">ブイをさがす</div></div>
      </div>

    );
  }
}

export default Post;