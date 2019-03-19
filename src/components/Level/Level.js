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
    console.log(window.screen.width);
    console.log("called get_position method")
    this.reset_state();
    this.setState({
      position: {
        latitude: Math.round(position.coords.latitude * 1000000),
        longitude: Math.round(position.coords.longitude * 1000000)
      },
      buoys: []
    })
    db.collection("buoys").where("position.latitude", "<", this.state.position.latitude + 20).where("position.latitude", ">", this.state.position.latitude - 20)
      .get()
      .then((query_snapshot) => {        
        const between_with_buoys = window.screen.width / query_snapshot.docs.length
        var count = 0;
        var view_component = [];
        query_snapshot.forEach((doc) => {
          console.log( doc.data().position.longitude , this.state.position.longitude + 20,"and",doc.data().position.longitude , this.state.position.longitude- 20);
          if( (doc.data().position.longitude < this.state.position.longitude + 20) && (doc.data().position.longitude > this.state.position.longitude - 20) ) {
            view_component.push(<Drifting message={doc.data().message} left={(between_with_buoys * count) + "px" }/>);
            console.log(this.state.position.x,"and",doc.data().position.latitude);
            count ++;
          }
        })
        this.setState({buoys: view_component});
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