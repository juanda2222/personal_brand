import React, { Component } from 'react';

import "./IntroductionBanner.css"
import pageInfo from "../../assets/pageInfo.js"
import BackgroundContainer from "./BackgroundContainer.js"

//import { facebookIcon} from "../../assets/MyIcons"
//import {ReactComponent as facebook_logo} from '../../assets/facebook.svg';

import { FaBehanceSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDropdownCircle } from 'react-icons/io';


class IntroductionBanner extends Component {

    

    render() {
        let header1 = this.props.h1 ? this.props.h1 : pageInfo.english.name
        let text1 = this.props.h2 ? this.props.text1 : pageInfo.english.short_introduction

        let github_link = this.props.github_link ? this.props.github_link : pageInfo.english.github_link
        let behance_link = this.props.behance_link ? this.props.behance_link : pageInfo.english.behance_link
        let linkedin_link = this.props.linkedin_link ? this.props.linkedin_link : pageInfo.english.linkedin_link
        
        
        return (
            <BackgroundContainer>
                <div></div>
                <div className="text_wraper">
                    <h1>{header1}</h1>
                    <h3>{text1}</h3>
                    <hr className="bar_style"/>
                    <div className="social_icons">
                        <a href={github_link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaGithub className="icon"/>
                        </a>
                        <a href={behance_link} 
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaBehanceSquare className="icon"/>
                        </a>
                        <a href={linkedin_link}  
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaLinkedinIn className="icon" />
                            
                        </a>
                    </div>
                </div>
                <a href="#projects_banner_pointer"
                    style={{padding:"0 0 20px 0"}}>
                    <IoIosArrowDropdownCircle className="icon" />
                    
                </a>
            </BackgroundContainer>
        );
    }
}

export default IntroductionBanner;
