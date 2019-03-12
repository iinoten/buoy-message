import React from 'react';
import ReactDOM from 'react-dom';
import './Buoy.css'
import posed from 'react-pose';

const props = {
  card: { borderRadius: '2%', width: '85vw'},
  buoy: { borderRadius: '50%', width: '55vw'}
}
const Box = posed.div(props);
const Content = posed.div({
  card: {opacity: 1, applyAtStart: { display: 'block' }},
  buoy: {opacity: 0, applyAtEnd: { display: 'none' }}
})

class Buoy extends React.Component{
  constructor() {
    super();
    this.state = {
      message_text: "",
      isVisible: true
    }
  }
  focus_text_box = () => {
    let input = ReactDOM.findDOMNode(this.refs.message_input);
    input && input.focus();
  }
  test_click_card = (e) => {
    if(this.state.message_text){
      if(!(e.target.id==='input_flame')) {
        this.setState({ isVisible: !this.state.isVisible });
      }
    }
  }
  //今はとりあえず使ってない
  click_send_button_handler = () => {
    this.props.send_data(this.state.message_text);
  }
  onChange_text_box = (e) => {
    const box_limit_text_length = 45;
    var update_messsage_length = this.state.message_text.length + 1;
    if( update_messsage_length < box_limit_text_length) {
      this.setState({
        message_text: e.target.value
      });
    } else {
      this.setState({
        message_text: this.state.message_text.slice(0,-1)
      });
    }
  }
  click_buoy = () => {
    if(!this.state.isVisible) {
      this.setState({
        isVisible: true
      })
    }
  }
  componentDidMount() {
  }
  render(){
    return(
      <div>
          <Box className="form" onClick={this.click_buoy} pose={this.state.isVisible ? 'card' : 'buoy'}>
          <Content id="content_form" pose={this.state.isVisible ? 'card' : 'buoy'}>
            <div id="input_flame" onClick={this.focus_text_box}>
              <input id="textbox" ref="message_input" value={this.state.message_text} type="text" onChange={ this.onChange_text_box } />
              {this.state.message_text}
            </div>
            <button id="send_button" onClick={this.test_click_card}>ブイを浮かべる</button>
          </Content>
          </Box>
      </div>
    );
  }
}

export default Buoy;