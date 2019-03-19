import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Level from '../Level/Level';
import './TopPage.css'

class TopPage extends Component{
  handle_to_post_page = () => {
    this.props.history.push('/send');
  }
  render(){
    return(
      <div>
        <div id="buoy-title">buoy</div>
        <Level />
        <div id="transition-post-page" onClick={this.handle_to_post_page}><div id="induction-message-post">ブイをうかべる</div></div>
      </div>
    );
  }
}

export default TopPage;