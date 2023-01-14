import React from 'react';

import Menu from './Menu/Menu.js';
import Footer from "./Footer/Footer.js"

//import Section from './Section/test.js';
import IntroductionBanner from './IntroductionBanner/IntroductionBanner.js';
import ProjectsBanner from './ProjectsBanner/ProjectsBanner.js';
import SkillsBanner from './SkillsBanner/SkillsBanner.js';
import AboutBanner from "./AboutBanner/AboutBanner.js"
import Chat from './Chat/Chat';

export interface HomeScreenProps {
  user: string
}

class HomeScreen extends React.Component<HomeScreenProps>  {

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
        <Chat/>
      </div>
      
    );
  }
}

export default HomeScreen;
