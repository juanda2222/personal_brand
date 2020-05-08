import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
import Footer from "./Footer/Footer"
import ContactBanner from "./ContactBanner/ContactBanner"




class ContactScreen extends Component {

  render() {
    return (
      
      <div style={{flex:1}}>
        
        <div><span id="contact_top_pointer"></span></div>
        <Menu/>
        <ContactBanner/>
        <Footer top_pointer_id={"contact_top_pointer"}/>
      </div>
      
    );
  }
}

export default ContactScreen;
