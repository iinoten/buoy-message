import React, {Component} from 'react';

import Drifting from '../Drifting/Drifting';
import './Level.css'
import firebase from 'firebase'

import update from 'immutability-helper';
var db = firebase.firestore();

class Level extends Component{
  constructor() {
    super();
    this.state = {
      buoys: null,  //浮かせるブイ達
      position: {
        x: null,
        y: null
      }
    }
    navigator.geolocation.watchPosition(this.get_position);
  }
  get_position = (position) => {
    console.log(position);
    this.setState({
      position: {
        x: Math.round(position.coords.latitude * 100000),
        y: Math.round(position.coords.longitude * 100000)
      }
    })
    console.log(this.state.position);
    db.collection("buoys").where("position.latitude", "<", this.state.position.x + 200).where("position.latitude", ">", this.state.position.y - 200)
      .get()
      .then((query_snapshot) => {
        query_snapshot.forEach((doc) => {
          console.log(doc.id,"and...",doc.data().message);
        })
      })
  }
  componentDidMount(){
    navigator.geolocation.watchPosition(this.get_position);
  }
  render(){
    return(
      <div id="Level">
        <Drifting message="HelloBuoy!"  left={30 + "px"} />
      </div>
    );
  }
}

export default Level;