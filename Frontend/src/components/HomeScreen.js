import React, { Component } from 'react';


import Menu from './Menu/Menu.js';
import Footer from "./Footer/Footer.js"

//import Section from './Section/test.js';
import IntroductionBanner from './IntroductionBanner/IntroductionBanner';
import ProjectsBanner from './ProjectsBanner/ProjectsBanner';
import SkillsBanner from './SkillsBanner/SkillsBanner';
import AboutBanner from "./AboutBanner/AboutBanner.js"


class HomeScreen extends Component {

  render() {

    return (
      <div id="home_screen" style={{flex:1}}>
        <div><span id="top_pointer"></span></div>
        <Menu/>
        <IntroductionBanner/>
        <ProjectsBanner/>
        <AboutBanner/>
        <SkillsBanner/>
        
        <Footer top_pointer_href={"#top_pointer"} />
      </div>
      
    );
  }
}

export default HomeScreen;
