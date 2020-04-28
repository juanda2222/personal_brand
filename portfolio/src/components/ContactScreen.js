import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
import Footer from "./Footer/Footer"
import ContactBanner from "./ContactBanner/ContactBanner"




class ContactScreen extends Component {

  render() {
    return (
      
      <div style={{flex:1}}>
        <Menu i_active={3}/>
        <div><span id="top_pointer"></span></div>
        <ContactBanner/>
        <Footer/>
      </div>
      
    );
  }
}

export default ContactScreen;
