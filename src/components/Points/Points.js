import React, {Component} from 'react';

import Install from '../Install/Install';

import './Points.css'

class Points extends Component{
  constructor() {
    super();
    this.state = {
      position: {
        x: null,
        y: null
      }
    }
    navigator.geolocation.watchPosition(this.get_position);

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
  componentWillUnmount() {
    
  }
  componentDidMount() {
    navigator.geolocation.watchPosition(this.get_position);
  }
  render(){
    return(
      <div>
        <div>緯度{this.state.position.x}</div>
        <div>経度{this.state.position.y}</div>
        <Install />
      </div>
    );
  }
}

export default Points;