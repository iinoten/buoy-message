import React, {Component} from 'react';

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
  }
  get_position = (position) => {
    console.log(position.coords)
    this.setState({
      position: {
        x: position.coords.latitude,
        y: position.coords.longitude
      }
    })
  }
  componentDidMount() {
    navigator.geolocation.watchPosition(this.get_position);
  }
  render(){
    return(
      <div>
        <div>{this.state.position.x}</div>
        <div>{this.state.position.y}</div>
      </div>
    );
  }
}

export default Points;