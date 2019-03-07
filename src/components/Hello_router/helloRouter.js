import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class helloRouter extends Component{
  handle_to_about_page = () => {
    this.props.history.push('/');
    console.log("test")
  }
  render(){
    return(
      <div onClick={this.handle_to_about_page}>Hello react-router</div>
    );
  }
}

export default withRouter(helloRouter);