import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
import Footer from './Footer/Footer.js';
import Section from './Section/test.js';

class ProyectsScreen extends Component {

  render() {
    return (
      
      <div>
        <span id="top"></span>
        <Menu/>
        <Section
          id="Donate"
          title="Donate"
        />
        <Section
          id="Proyect 2"
          title="Proyect 2"
        />
        <Section
          id="Proyect 3"
          title="Proyect 3"
        />
        <Section
          id="Proyect 4"
          title="Proyect 4"
        />
        <Footer top_pointer_href="projecs#top"/>
      </div>
      
    );
  }
}

export default ProyectsScreen;
