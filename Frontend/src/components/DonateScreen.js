import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
import Footer from './Footer/Footer.js';
import Section from './Section/test.js';

class DonateScreen extends Component {

  render() {
    return (
      
      <div>
        <span id="donate_top_pointer"></span>
        <Menu/>
        <Section
          id="Donate"
          title="Donate"
        />
        <Section
          id="Proyect 2"
          title="Proyect 2"
        />
        <Footer top_pointer_id="donate_top_pointer"/>
      </div>
      
    );
  }
}

export default DonateScreen;
