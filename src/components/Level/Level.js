import React, {Component} from 'react';

import Drifting from '../Drifting/Drifting';
import './Level.css'

class Level extends Component{
  render(){
    return(
      <div id="Level">
        <Drifting message="HelloBuoy!" />
      </div>
    );
  }
}

export default Level;