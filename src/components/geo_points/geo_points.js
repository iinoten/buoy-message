import React, {Component} from 'react';

import './Geo_point.css'

class Geo_point extends Component{
  constructor() {
    super();
    this.state({
      point:{
        x:null,
        y:null
      }
    });
  }
  set_point = () => {
    console.log("render");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords)
        this.setState({
          point: {
            x:  position.coords.latitude,
            y:  position.coords.latitude
          }
        })
      },
      (error) => {
        console.log("Error");
        console.log(error);
      }
    )
  }
  componentDidMount() {
    this.set_point();
  }
  render(){
    return(
      <div>
        {this.state.point.x}:{this.state.point.y}
      </div>
    );
  }
}

export default Geo_point;