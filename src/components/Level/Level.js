import React, {Component} from 'react';

import Drifting from '../Drifting/Drifting';
import './Level.css'
import firebase from '../../Firebase.js'

import update from 'immutability-helper';
var db = firebase.firestore();

class Level extends Component{
  constructor() {
    super();
    this.state = {
      buoys: [],  //浮かせるブイ達
      position: {
        x: null,
        y: null
      }
    }
    navigator.geolocation.watchPosition(this.get_position);
  }
  get_position = (position) => {
    console.log("called get_position method")
    this.reset_state();
    this.setState({
      position: {
        x: Math.round(position.coords.latitude * 100000),
        y: Math.round(position.coords.longitude * 100000)
      },
      buoys: []
    })
    db.collection("buoys").where("position.latitude", "<", position.coords.latitude * 100000 + 20).where("position.latitude", ">", position.coords.latitude * 100000 - 20)
      .get()
      .then((query_snapshot) => {
        var count = 0;
        query_snapshot.forEach((doc) => {
          console.log(this.state.position.x,"and",doc.data().position.latitude);
          count ++;
          this.setState({
            buoys: update(this.state.buoys,{
              $push:[<Drifting message={doc.data().message} left={(100 * count) + "px" }/>]
            })
          })
        })
      })
  }
  reset_state = () => {
    this.setState({
      buoys: []
    });
  }
  componentDidMount(){
    navigator.geolocation.watchPosition(this.get_position);
  }
  render(){
    return(
      <div id="Level">
        {this.state.buoys.map((item, i) =>
          <React.Fragment key={i}>{item}</React.Fragment>
        )}
      </div>
    );
  }
}

export default Level;