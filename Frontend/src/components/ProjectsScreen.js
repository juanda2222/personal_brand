import React, { Component } from 'react';


//import Menu from './Menu/Menu.js';
import Section from './Section/test.js';

class ProyectsScreen extends Component {

  render() {
    return (
      
      <div>
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
      </div>
      
    );
  }
}

export default ProyectsScreen;