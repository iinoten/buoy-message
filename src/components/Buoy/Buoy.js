import React from 'react';
import ReactDOM from 'react-dom';
import './Buoy.css'
import posed from 'react-pose';

const props = {
  card: { borderRadius: '2%', width: '310px', height:'200px'},
  buoy: { borderRadius: '50%', width: '310px', height:'310px'}
}
//フラッグ
const Frag = posed.div({
  card: {applyAtEnd:{ display: 'none' }, top:'40%', left:'50%',x:'0px', y:'0px', rotateZ: -125, transition: {duration:200}},
  buoy: {applyAtStart:{ display: 'inline' }, top:'50%', x:'-150px', y:'-250px', rotateZ: -125, delay:300, transition: {eace: 'circIn', duration:1000}}
});
//フラッグの棒
const Rod = posed.div ({
  card: { applyAtEnd:{ display: 'none' }, height:'0px', bottom: '55%' },
  buoy: { applyAtStart: { display: 'inline' }, height: '130px',bottom: '50%', delay: 300 }
});
const Box = posed.div(props);
const Content = posed.div({
  card: {opacity: 1, applyAtStart: { display: 'block' }},
  buoy: {opacity: 0, applyAtEnd: { display: 'none' }}
});
const Floating = posed.div({
  card: {applyAtEnd: {display: 'inline'}, top: '50%'},
  buoy: {applyAtEnd: {display: 'none'}, top: '-30%', delay: 1300, rotateZ: 30, transition: {eace: 'spling', duration:400}}
});

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
    if(this.state.message_text){
      this.setState({ isVisible: !this.state.isVisible });
      this.props.send_data(this.state.message_text);
    }
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
        <Floating id="floating" pose={this.state.isVisible ? 'card' : 'buoy'}>
          <Frag id="frag" pose={this.state.isVisible ? 'card' : 'buoy'} />
          <Rod id="rod" pose={this.state.isVisible ? 'card' : 'buoy'}></Rod>
          <Box className="form" onClick={this.click_buoy} pose={this.state.isVisible ? 'card' : 'buoy'}>
          <Content id="content_form" pose={this.state.isVisible ? 'card' : 'buoy'}>
            <div id="input_flame" onClick={this.focus_text_box}>
              <input id="textbox" ref="message_input" value={this.state.message_text} type="text" onChange={ this.onChange_text_box } />
              {this.state.message_text}
            </div>
            <button id="send_button" onClick={this.click_send_button_handler}>ブイを浮かべる</button>
          </Content>
          </Box>
        </Floating>
      </div>
    );
  }
}

export default Buoy;