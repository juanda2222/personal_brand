
import React from "react"
import "./Footer.css"


import page_info from "../../assets/pageInfo"
import { IoIosArrowDropupCircle } from 'react-icons/io';

import {Link} from "react-router-dom"

const Footer = props => {
    return (    
    <div>
        <span id="footer_pointer"></span>
        <div className="footer_container">
            <a href="#top_pointer"
                style={{padding:"20px 0 0 0"}}>
                <IoIosArrowDropupCircle className="icon" />
            </a>
            <div className="footer_columns">
                <div className="about_column">
                    <h3>
                        About this site
                    </h3>
                    <hr className="blue_bar"/>
                    <p>
                        This website was build with React and is hosted in Google Cloud Platform 
                    </p>
                </div>
                <div className="items_column">
                    <h3>
                        Support
                    </h3>
                    <hr className="blue_bar"/>
                    
                    <Link to="/contact"><p>
                        Contact me
                    </p></Link>
                    
                    <a href={page_info.english.issues_link} 
                        target="_blank"
                        alt="loading..">
                    <p>
                        Report issue
                    </p></a> 
                    <Link to="/contact/#top_pointer"><p>
                        Contact me
                    </p></Link>
                    <Link to="/live_chat"><p>
                        Live chat
                    </p></Link>
                </div>
                <div className="items_column">
                    <h3>
                        Social
                    </h3>
                    <hr className="blue_bar"/>
                    <a href={page_info.english.instagram_link} 
                        target="_blank"
                        alt="loading.."><p>
                        Instagram
                    </p></a> 
                    <a href={page_info.english.facebook_link} 
                        target="_blank"
                        alt="loading.."><p>
                        Facebook
                    </p></a> 
                    <a href={page_info.english.twitter_link} 
                        target="_blank"
                        alt="loading.."><p>
                        Twitter
                    </p></a> 
                </div>
            </div>
            <footer>&copy; Copyright 2020 Juan David Ramirez Villegas</footer>
        </div>
    </div>
    );
}

export default Footer;




