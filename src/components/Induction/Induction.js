import React, {Component} from 'react';

import './Induction.css'

class Induction extends Component{
  render(){
    return(
      <div>
        <div id="induction-title">buoy</div>
        <div id="induction-subtitle">- インターネットのうみにメッセージをうかべよう -</div>
        <div id="induction-buoy">
          <img src={`${process.env.PUBLIC_URL}/qrl_picture.png`} alt="QRcode" id="induction_QR_code"/>
        </div>
        <div id="description-induction">QRコードをスマホでよみこんで<span className="highlight">buoy</span>をたいけんしよう</div>
      </div>
    );
  }
}

export default Induction;