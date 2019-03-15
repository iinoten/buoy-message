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
      buoys: [],  //浮かせるブイ達
      position: {
        x: null,
        y: null
      }
    }
    navigator.geolocation.watchPosition(this.get_position);
  }
  get_position = (position) => {
    this.setState({
      position: {
        x: Math.round(position.coords.latitude * 100000),
        y: Math.round(position.coords.longitude * 100000)
      },
      buoys: []
    })
    db.collection("buoys").where("position.latitude", "<", this.state.position.x + 200).where("position.latitude", ">", this.state.position.x - 200)
      .get()
      .then((query_snapshot) => {
        console.log(query_snapshot.docs.length);
        var count = 0;
        query_snapshot.forEach((doc) => {
          count ++;
          console.log(count);
          this.setState({
            buoys: update(this.state.buoys,{
              $push:[<Drifting message={doc.data().message} left={(100 * count) + "px" }/>]
            })
          })
        })
      })
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