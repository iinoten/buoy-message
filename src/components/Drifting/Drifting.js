import React, {Component} from 'react';
import posed from 'react-pose';

import './Drifting.css'

const Box = posed.div({
  card: {opacity:1, y: "-50%", x: "-50%", delay: 150, applyAtEnd: {display: 'inline'}},
  buoy: {opacity:0, y:-500, x: "-50%", applyAtEnd: {display: 'inline'}}
});
const Buoy = posed.div({
  card: {opacity:0, y: -450, applyAtEnd: {display: 'none'}},
  buoy: {opacity:1, y:0, delay: 150, applyAtStart: {display: 'inline'}}
})
class Drifting extends Component{
  constructor() {
    super();
    this.state = {
      is_pick_up: false
    }
  }
  open_buoy_message = () => {
    console.log(this.props.message)
    this.setState({
      is_pick_up: !this.state.is_pick_up
    });
  }
  click_background_handler = (e) => {
    if( ( !(e.target.id === "content-box") || !(e.target.id === "content-box") ) && this.state.is_pick_up ) {
      this.setState({
        is_pick_up: !this.state.is_pick_up
      })
    }
  }
  render(){
    return(
      <div>
        <div id="background" onClick={this.click_background_handler}></div>
          <Box id="message-box" pose={this.state.is_pick_up ? 'card' : 'buoy'}>
            <div id="Message-rod"></div><div id="Message-frag"></div>
            <div id="content-box">{this.props.message}</div>
          </Box>
        <Buoy id="Drifting" style={{left:this.props.left}} onClick={this.open_buoy_message} pose={this.state.is_pick_up ? 'card' : 'buoy'}>
          <div id="Drifting-rod" />
          <div id="Drifting-frag" />
          <div id="baloon" />
        </Buoy>
      </div>
    );
  }
}

export default Drifting;