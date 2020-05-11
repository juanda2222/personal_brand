import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
import Footer from './Footer/Footer.js';
import DonateBanner from './DonateBanner/DonateBanner.js';

class DonateScreen extends Component {

  render() {
    return (
      
      <div>
        <span id="donate_top_pointer"></span>
        <Menu/>
        <DonateBanner/>
        <Footer top_pointer_id="donate_top_pointer"/>
      </div>
      
    );
  }
}

export default DonateScreen;
