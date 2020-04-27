import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
//import Section from './Section/test.js';
import IntroductionBanner from './IntroductionBanner/IntroductionBanner';
import ProjectsBanner from './ProjectsBanner/ProjectsBanner';
import SkillsBanner from './SkillsBanner/SkillsBanner';
import AboutBanner from "./AboutBanner/AboutBanner.js"
import Footer from "./Footer/Footer.js"

class HomeScreen extends Component {

  render() {
    return (
      
      <div style={{flex:1}}>
        <Menu i_active={0}/>
        <IntroductionBanner/>
        <ProjectsBanner/>
        <AboutBanner/>
        <SkillsBanner/>
        <Footer/>
      </div>
      
    );
  }
}

export default HomeScreen;
